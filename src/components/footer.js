import React from 'react';

const Footer = () => {
    return (
        <footer className='page-footer'>
            <p>&copy; {new Date().getMonth() + 1}.{new Date().getFullYear()} Blog biuld with <a href="https://www.gatsbyjs.com" >Gatsby</a></p>

        </footer>
    );
};

export default Footer; 