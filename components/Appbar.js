import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import MovieIcon from '@material-ui/icons/MovieTwoTone';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import useStyles from '../hooks/useStyles';
import Link from 'next/link';

const Appbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar>
        <MovieIcon className={classes.icon} />
        <Link href="/">
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            Search Movies
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
