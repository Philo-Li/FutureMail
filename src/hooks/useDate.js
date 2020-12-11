import { format } from 'date-fns';

const useDate = (date) => {
  const year = format(new Date(date), 'yyyy');
  const month = format(new Date(date), 'MM');
  const day = format(new Date(date), 'dd');

  return {
    year,
    month,
    day,
  };
};

export default useDate;
