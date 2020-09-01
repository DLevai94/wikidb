import React from 'react';
import Footer from './Footer';
import AppBar from './Appbar';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
