import React from 'react';

const Footer = () => {
    return (
        <nav className="navbar navbar-dark bg-primary text-center">
            <p className="w-100 color-white" style={{ color: "white" }}> Sebastian Martinez - &copy; {new Date().getFullYear()} </p>
        </nav>
    )
}

export default Footer;
