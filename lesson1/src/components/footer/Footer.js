import React from 'react';
import classes from './Footer.module.css';
const Footer = ({link}) => {
    return (
        <div className={classes.list}>
            сайт: {link}
        </div>
    );
};

export default Footer;