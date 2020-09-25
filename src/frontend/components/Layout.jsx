import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='App'>
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
