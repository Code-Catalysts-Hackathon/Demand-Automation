import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import styles from './CustomReactSelect.module.scss';
import debounce from 'debounce-promise';

interface IOption {
  label: string;
  value: number | string;
}

interface ICustomReactSelectProps {
  loadOptions: (value: string) => Promise<IOption[]>;
  onChange: (value: any) => void;
  value?: IOption;
}

export default function CustomReactSelect({
  loadOptions,
  onChange,
  value
}: ICustomReactSelectProps) {

 const [options,setOptions]=useState<IOption[]>([])

  const debouncedEvent = debounce(loadOptions, 500);

  const onMenuOpen = async ()=>{
    const response = await loadOptions(String(value?.value ||""));
    setOptions(response);
  }

  return (
    <div className={styles.customreactselect}>
      <AsyncSelect
        defaultOptions={options}
        classNamePrefix={'react-select'}
        onMenuOpen={()=>onMenuOpen()}
        loadOptions={debouncedEvent}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
