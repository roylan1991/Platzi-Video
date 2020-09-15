import React from 'react';
import Footer from './Footer';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <div className="App">           
            {children}
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.object,    
};

export default Layout;
