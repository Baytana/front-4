import React from 'react';
import classes from './Modal.module.css';
import Button from "../Button/Button";
const Modal = ({children, handleShow}) => {

    return (
        <div>
            <div className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                {/*<button onClick={handleShow}>close</button>*/}
                <Button func={handleShow} text={'close'}/>
                {children}
            </div>
        </div>
    );
};

export default Modal;