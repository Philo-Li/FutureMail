import { useState } from 'react';
import { add } from 'date-fns';

const useDatePicker = () => {
  const minDate = add(new Date(), { months: 1 });
  const maxDate = add(new Date(), { years: 10 });
  const [value, onChange] = useState(minDate);

  return {
    value,
    onChange,
    minDate,
    maxDate,
  };
};

export default useDatePicker;
