import React from 'react';
import classes from './Component2.module.css'
const Component2 = ({text}) => {
    return (
        <div className={classes.component}>
            <h1>{text}</h1>
        </div>
    );
};

export default Component2;