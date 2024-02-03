import React, { useState } from 'react';
import Todo from '../todo/Todo';
import classes from './todoList.module.css';
import Button from "../button/Button";


const TodoList = ({tasks, handleDelete, handleDone, handleEdit, handleClear}) => {
    const [currentEdit, setCurrentEdit] = useState('')

    return (
        <div className={classes.list}>
            <Button action={handleClear} text={'Очистить'}/>
            {
                tasks.map((task, index) =>(
                    <Todo
                        key={task.id}
                        task={task}
                        handleDelete={handleDelete}
                        index={index}
                        handleDone={handleDone}
                        handleEdit={handleEdit}
                        setCurrentEdit={setCurrentEdit}
                        isEdit={currentEdit === task.id}
                    />
                ))
            }
        </div>
    );
};
export default TodoList;