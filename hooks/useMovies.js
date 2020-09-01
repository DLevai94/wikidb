import useSWR from 'swr';

function useMovies(title) {
  const { data, error } = useSWR(title ? `/api/movies?title=${title}` : null);
  return {
    movies: data?.Search,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useMovies;
