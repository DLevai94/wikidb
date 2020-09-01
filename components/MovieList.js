import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import MovieCard from '../components/MovieCard';

const MovieList = ({ movies, isLoading, isError }) => {
  if (!movies) return <p>There's nothing to show right now. Search for a movie title.</p>;
  if (isLoading) return <CircularProgress />;
  if (isError) return <p>Error</p>;
  return (
    <>
      {movies?.map((movie) => (
        <MovieCard title={movie.Title} image={movie.Poster} year={movie.Year} id={movie.imdbID} />
      ))}
    </>
  );
};

export default MovieList;
