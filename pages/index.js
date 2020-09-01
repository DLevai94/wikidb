import { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import useStyles from '../hooks/useStyles';
import Hero from '../components/Hero';
import MovieList from '../components/MovieList';
import useMovies from '../hooks/useMovies';

export default function Index() {
  const [search, setSearch] = useState('');
  const classes = useStyles();
  const { movies, isLoading, isError } = useMovies(search);

  const handleSearchChange = (text) => {
    setSearch(text);
  };

  const handleSearch = () => {
    console.log(search);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Hero onChangeSearch={handleSearchChange} searchValue={search} onRequestSearch={handleSearch} />
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <MovieList movies={movies} isLoading={isLoading} isError={isError} />
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
