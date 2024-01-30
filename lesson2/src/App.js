import './App.css';
import Modal from "./components/Modal/Modal";
import { useState } from 'react';
import Input from "./components/Input/Input";
import CountPage from "./pages/CountPage/CountPage";
import Button from "./components/Button/Button";
import List from "./components/List/List";
import TodoList from "./components/TodoList/TodoList";

function App() {
    const [show,setShow]= useState(false)
    const [input, setInput]= useState('')
    const tasks= [
        {
            id:1 ,
            task: 'coding'
        },
        {
            id:2,
            task: 'eat'
        },
        {
            id:3,
            task: 'sleep'
        }
    ]
    const onChangeInput = (event)=>{
        setInput(event.target.value)
    }
    const handleShow=()=> setShow(!show)
    return (
    <div>
        {show && <Modal handleShow={handleShow}>
            <h1>Modal</h1>

        </Modal>}
        {/*<button onClick={handleShow}>open</button>*/}
        <Button func={handleShow} text={'open'}/>
        <CountPage/>
        <Input type={'text'} placeholder={'name'} onChangeInput={onChangeInput}/>

        <TodoList tasks={tasks}/>

    </div>
  );
}

export default App;
