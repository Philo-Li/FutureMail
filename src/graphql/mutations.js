import { gql } from '@apollo/react-hooks';

// eslint-disable-next-line import/prefer-default-export
export const AUTHORIZE = gql`
  mutation authorize($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;
