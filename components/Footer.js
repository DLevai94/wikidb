import React, { useMemo } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import useStyles from '../hooks/useStyles';

const Footer = () => {
  const classes = useStyles();

  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Search Movies
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        An unnecessary, but cool movie search app.
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://davidlevai.com/">
          David Levai
        </Link>{' '}
        {year}
        {'.'}
      </Typography>
    </footer>
  );
};

export default Footer;
