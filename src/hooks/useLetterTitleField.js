/* eslint-disable import/prefer-default-export */
import { useState } from 'react';
import useDate from './useDate';

const useLetterTitleField = (type) => {
  const { year, month, day } = useDate(new Date());
  const initial = `一封来自 ${year} 年 ${month} 月 ${day} 日的信`;

  const [value, setValue] = useState(initial);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};

export default useLetterTitleField;
