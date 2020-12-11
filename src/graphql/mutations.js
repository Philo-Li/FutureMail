import { gql } from '@apollo/react-hooks';

// eslint-disable-next-line import/prefer-default-export
export const AUTHORIZE = gql`
  mutation authorize($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(user: { username: $username, password: $password }) {
      username
    }
  }
`;

export const CREATE_LETTER = gql`
  mutation createLetter( $title: String!, $text: String!, $sendTime: String!  ) {
    createLetter(letter: { title: $title, text: $text, sendTime: $sendTime } ) {
      id
      user{
        id
        username
        createdAt
      }
      title
      titleEn
      userId
      url
      description
      createdAt
      text
    }
  }
`;
