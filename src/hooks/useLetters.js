import { useQuery } from '@apollo/react-hooks';

import { GET_LETTERS } from '../graphql/queries';

const useLetters = (variables) => {
  const {
    data, fetchMore, refetch, loading, ...result
  } = useQuery(GET_LETTERS, {
    fetchPolicy: 'cache-and-network',
    variables,
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data && data.letters.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: GET_LETTERS,
      variables: {
        after: data.letters.pageInfo.endCursor,
        ...variables,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          letters: {
            ...fetchMoreResult.letters,
            edges: [
              ...previousResult.letters.edges,
              ...fetchMoreResult.letters.edges,
            ],
          },
        };

        return nextResult;
      },
    });
  };

  return {
    letters: data ? data.letters : undefined,
    fetchMore: handleFetchMore,
    refetch,
    loading,
    ...result,
  };
};

export default useLetters;
