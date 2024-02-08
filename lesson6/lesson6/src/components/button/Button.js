import React from 'react';
import classes from "./Button.module.css";


const Button = ({ action, text }) => {
    return (
        <button onClick={action} className={classes.button}>{text}</button>
    );
};

export default Button;