import React from 'react';
import '../index.css'


function Task(props) {
    return(
        <div className='task'>
            <div className='task-text'>{props.title}</div>
        </div>
    );
}

export default Task;