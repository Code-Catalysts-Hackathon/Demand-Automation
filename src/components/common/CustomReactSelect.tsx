import React from 'react';
import AsyncSelect from 'react-select/async';
import axiosApiClient from '../../config/axiosConfig';
import styles from './CustomReactSelect.module.scss';
import debounce from 'debounce-promise';
import { getLocalToken } from '../../utils';

interface IOption {
  label: string;
  value: number | string;
}

interface ICustomReactSelectProps {
  loadOptions?: (value: string) => Promise<IOption[]>;
  onChange?: (value: any) => void;
  value?: IOption;
}

const loadOptions1 = async (value: string) => {
  try {
    const response = await axiosApiClient.get(
      axiosApiClient.URLS.api.GET_BUSINESS_UNITS_URL,
      {
        search: value
      },
      {
        Authorization: getLocalToken()
      }
    );
    const result = response.data.list.map((item: any) => {
      return {
        label: item.name,
        value: item.id
      };
    });
    return result;
  } catch (e) {
    console.log(e);
    return [];
  }
};
export default function CustomReactSelect({
  loadOptions = loadOptions1,
  onChange,
  value
}: ICustomReactSelectProps) {
  const debouncedEvent = debounce(loadOptions, 800);

  return (
    <div className={styles.customreactselect}>
      <AsyncSelect
        classNamePrefix={'react-select'}
        loadOptions={debouncedEvent}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
