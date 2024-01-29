import React from 'react';
import classes from './header.module.css'
const Header = ({navbar}) => {
    return (
        <ul className={classes.list}>
            {navbar.map((item,index)=><li key={index} >{item}</li>)}
        </ul>
    );
};

export default Header;