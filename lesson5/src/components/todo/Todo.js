import React, { useState } from 'react';
import classes from './todo.module.css';
import Button from '../button/Button';
import Input from '../input/Input';
import user from '../user/User';


const Todo = ({task, handleDelete, index,handleDone, handleEdit, setCurrentEdit, isEdit}) => {
    const [newTitle, setNewTitle] = useState(task.task)
    const handleSave=()=>{
        handleEdit({
            ...task,task: newTitle
        })
        setCurrentEdit('')
    }
    const handleCancel=()=>{
        setNewTitle(task.task)
        setCurrentEdit('')
    }
    return (
        <>{isEdit ?(
            <div className={classes.edit}>
                <input type='text'
                       value={newTitle}
                       onChange={(event) => setNewTitle(event.target.value)}
                />
                <Button action={handleSave} text={'Сохранить'} />
                <Button action={handleCancel} text={'Отмена'} />
            </div>
        ): (
            <div className={`${classes.todo} ${task.completed && classes.completed} `}>
                <p>{index+1} {task.task}</p>
                <Button action={() => setCurrentEdit(task.id)} text={'Редактировать'} />
                <Button action={() => handleDone(task.id)} text={'Выполнено'} />
                <Button action={() => handleDelete(task.id)} text={'Удалить'} />
            </div>
        )}
        </>
    )
};

export default Todo;