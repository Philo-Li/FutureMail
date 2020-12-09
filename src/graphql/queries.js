/* eslint-disable import/prefer-default-export */
import { gql } from '@apollo/react-hooks';

const LETTER_DETAILS = gql`
  fragment letterDetails on Letter {
    id
    title
    titleEn
    userId
    user {
      id
      username
    }
    createdAt
    reviewCount
    viewsCount
    likesCount
    url
    description
    text
  }
`;

export const GET_LETTERS = gql`
  query getLetters(
    $orderBy: AllLettersOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    letters(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      edges {
        node {
          ...letterDetails
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
      }
    }
  }
  ${LETTER_DETAILS}
`;
