import React from 'react';
import classes from "./List.module.css";

const List = ({task}) => {
    // console.log(task)
    return (
        <div className={classes.list}>
            <p>{task.id} {task.task}</p>
        </div>
    );
};

export default List;