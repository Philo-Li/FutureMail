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
  mutation createLetter(
    $title: String!,
    $text: String!,
    $sentAt: DateTime!,
    $author: String!,
    $email: String!,
    $setPrivate: Boolean!
    ) {
    createLetter(letter: {
      title: $title,
      text: $text,
      sentAt: $sentAt,
      author: $author,
      email: $email,
      setPrivate: $setPrivate
    } ) {
      id
      user{
        id
        username
        createdAt
      }
      title
      userId
      text
      createdAt
      reviewCount
      likesCount
      sentAt
      author
      email
      setPrivate
    }
  }
`;
