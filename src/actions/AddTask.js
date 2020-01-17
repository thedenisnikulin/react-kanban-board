import React, { useState } from 'react';
import '../index.css'


function AddTask(props) {
    const [formState, setFormState] = useState(false);

    const [addTask, handleChange] = props.handlers;

    const renderInput = () => {
        return (
        <form id='form' onSubmit={(event) => addTask(event)}>
            <input type='text' onChange={(event) => handleChange(event, props.list.id)} autoFocus onBlur={() => setFormState(false)}/>
            <button>add</button> 
        </form>
        );
    }
    const renderButton = () =>  {
        return (
            <button className='add-button' onClick={() => setFormState(true)}>+ add task</button>
        );
    }

    return(
        formState ? renderInput() : renderButton()
    );
}

export default AddTask;