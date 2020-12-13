/* eslint-disable object-curly-newline */
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import { CREATE_LETTER } from '../graphql/mutations';

const useCreateLetter = () => {
  const history = useHistory();
  const [mutate, result] = useMutation(CREATE_LETTER);

  const createLetter = async ({ title, text, sentAt, author, email, setPrivate }) => {
    mutate({ variables: { title, text, sentAt, author, email, setPrivate } });
    history.push('/');
  };

  return [createLetter, result];
};

export default useCreateLetter;
