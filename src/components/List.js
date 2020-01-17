import React from 'react';
import '../index.css'

import Task from './Task'
import AddTask from '../actions/AddTask'


function List(props) {

    return(
        <div className="list">
            <div className='list-container'>
                <div className="list-title">
                    <strong>{props.list.title}</strong>
                </div>
                <div className="tasks">
                    {
                        props.tasks.map(task =>
                            <Task title={task.text}/>
                        )
                    }
                </div>
                <div className="add-task-button">
                    <AddTask 
                        handlers={props.handlers} 
                        list={props.list}
                    />
                </div>
            </div>
        </div>
    );
}

export default List;