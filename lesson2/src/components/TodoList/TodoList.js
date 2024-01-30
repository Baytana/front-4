import React from 'react';
import List from "../List/List";
import classes from "./TodoList.module.css";

const TodoList = ({tasks}) => {
    return (
        <div className={classes.list}>
            {
                tasks.map(task=> <List task={task}/>)
            }
        </div>
    );
};

export default TodoList;