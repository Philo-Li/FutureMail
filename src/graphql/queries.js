/* eslint-disable import/prefer-default-export */
import { gql } from '@apollo/react-hooks';

const LETTER_DETAILS = gql`
  fragment letterDetails on Letter {
    id
    title
    userId
    user {
      id
      username
    }
    createdAt
    reviewCount
    likesCount
    sentAt
    author
    email
    setPrivate
    text
  }
`;

const REVIEW_DETAILS = gql`
  fragment reviewDetails on Review {
    id
    text
    createdAt
    user {
      id
      username
    }
    letter{
      id
    }
    letterId
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

export const GET_AUTHORIZED_USER = gql`
  query getAuthorizedUser($includeReviews: Boolean = false, $first: Int, $after: String) {
    authorizedUser {
      id
      username
      reviews (first: $first, after: $after) {
        edges @include(if: $includeReviews) {
          node {
            ...reviewDetails
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
  }
  ${REVIEW_DETAILS}
`;
