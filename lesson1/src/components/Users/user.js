import React from 'react';
import classes from "./User.module.css";

const User = ({som}) => {
    return (
        <div className={classes.som}>{`SOM: ${som} => USD: ${som*88.70}`}</div>
    );
};

export default User;