import React from 'react';
import Footer from './Footer';
import AppBar from './Appbar';
import useStyles from '../hooks/useStyles';

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
