import React from 'react';
import classes from "./Input.module.css";
const Input = ({type,placeholder,onChangeInput}) => {
    return (
        <div className={classes.Input}>
            <input type={type} placeholder={placeholder} onChange={onChangeInput}/>
        </div>
    );
};

export default Input;