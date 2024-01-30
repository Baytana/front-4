import React, {useState} from 'react';
import Button from "../../components/Button/Button";

const CountPage = () => {
    const [count,setCount]=useState(0)
    const HandleIncrement=()=>{
        setCount(count+1)
    }

    const HandleDecrement=()=>{
        if (count>0){
            setCount(count-1)
        }
    }
    return (
        <div>
            <h1>{count}</h1>
            {/*<button onClick={HandleIncrement}>increment</button>*/}
            <Button func={HandleIncrement} text={'increment'}/>
            {/*<button onClick={HandleDecrement}>decrement</button>*/}
            <Button func={HandleDecrement} text={'decrement'}/>
        </div>
    );
};

export default CountPage;