import React, { useState } from 'react';
import '../index.css'


function AddList(props) {
    const [formState, setFormState] = useState(false);

    const [addList, handleChange] = props.handlers;

    const renderInput = () => {
        return (
        <form id='form' onSubmit={(event) => addList(event)}>
            <input id='add-list' type='text' onChange={(event) => handleChange(event)} autoFocus onBlur={() => setFormState(false)}/>
            <button>add</button> 
        </form>
        );
    }
    const renderButton = () =>  {
        return (
            <button id='add-list' className='add-button' onClick={() => setFormState(true)}>+ add list</button>
        );
    }

    return(
        formState ? renderInput() : renderButton()
    );
}

export default AddList;