import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import styles from './CustomReactSelect.module.scss';
import debounce from 'debounce-promise';
import ReactSelect from 'react-select';

interface IOption {
  label: string;
  value: number | string;
}

interface ICustomReactSelectAsyncProps {
  loadOptions: (value: string) => Promise<IOption[]>;
  onChange: (value: any) => void;
  value?: IOption;
  placeHolder?: string;
}


interface ICustomReactSelectProps{
  options:IOption[];
  onChange: (value: any) => void;
  value?: IOption;
  placeHolder?: string;
}

export function CustomReactSelect({
  options,
  onChange,
  placeHolder = '',
  value
}: ICustomReactSelectProps) {

  return (
    <div className={styles.customreactselect}>
      <ReactSelect
        options={options}
        classNamePrefix={'react-select'}
        onChange={onChange}
        value={value?.value ? value : undefined}
        placeholder={placeHolder || ""}
      />
    </div>
  );
}


export function CustomReactSelectAsync({
  loadOptions,
  onChange,
  placeHolder = '',
  value
}: ICustomReactSelectAsyncProps) {
  const [options, setOptions] = useState<IOption[]>([]);

  const debouncedEvent = debounce(loadOptions, 500);

  const onMenuOpen = async () => {
    const response = await loadOptions(String(value?.value || ''));
    setOptions(response);
  };

  return (
    <div className={styles.customreactselect}>
      <AsyncSelect
        defaultOptions={options}
        classNamePrefix={'react-select'}
        onMenuOpen={() => onMenuOpen()}
        loadOptions={debouncedEvent}
        onChange={onChange}
        value={value?.value ? value : undefined}
        placeholder={placeHolder || ""}
      />
    </div>
  );
}
