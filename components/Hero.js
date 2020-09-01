import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SearchBar from 'material-ui-search-bar';
import useStyles from '../hooks/useStyles';

const Hero = ({ searchValue, onChangeSearch, onRequestSearch }) => {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Search for Movies
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          An almost usable movie search platform
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container justify="center">
            <Grid item>
              <SearchBar value={searchValue} onChange={onChangeSearch} onRequestSearch={onRequestSearch} />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
