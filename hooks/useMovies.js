import useSWR from 'swr';

function useMovies(title) {
  const { data, error } = useSWR(`/api/movies?title=${title}`);
  return {
    movies: data?.Search,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useMovies;
