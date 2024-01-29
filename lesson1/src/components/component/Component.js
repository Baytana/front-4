import React from 'react';
import classes from "./component.module.css";

const Component = ({text}) => {
    return (
        <div className={classes.component}>
            <h1>{text}</h1>
        </div>
    );
};

export default Component;

// const sum=(a,b)=>{
//     return a+b
// }
//
// console.log(sum(22,3))