import { useState } from 'react';

const useLetterTextField = (type) => {
  const [value, setValue] = useState('亲爱的我自己，你好哇，');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};

export default useLetterTextField;
