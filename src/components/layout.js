import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import "normalize.css"

import "../assets/css/main.scss"
const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            {children}
            <Footer />
        </React.Fragment>
    );
};

export default Layout;