import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import '../index.css'

import List from './List'
import AddList from '../actions/AddList'


function Board(props) {
    const [lists, setLists] = useState([]);
    const [tasks, setTasks] = useState([]);
    
    const [currentList, setCurrentList] = useState();
    const [currentTask, setCurrentTask] = useState();



    const addTask = (event) => {
        event.preventDefault();
        setTasks([...tasks, currentTask]);
        const form = document.getElementById('form');
        form.reset();
    };

    const handleTaskChange = (e, id) => {
        e.preventDefault();
        const currentList = lists.filter(list =>
            list.id ===id    
        )[0];
        setCurrentTask({
            key: new Date().getTime(), 
            listId: currentList.id, 
            text: e.target.value
        });
    };

    const addList = (event) => {
        event.preventDefault();
        setLists([...lists, currentList]);
        const form = document.getElementById('form');
        form.reset();
    }
    
    const handleListChange = (event) => {
        event.preventDefault();
        const listId = lists.length > 0 ? lists.length : 0;    
        setCurrentList({
            key: new Date().getTime, 
            id: listId, 
            title: event.target.value
        });
    }

    return(
        <div className='board'>
            {
                lists.map(list => 
                    <List 
                        list={list}
                        tasks={tasks.filter(task =>
                            task.listId === list.id    
                        )}
                        handlers={[addTask, handleTaskChange]}
                    />
                )
            }
            <AddList handlers={[addList, handleListChange]}/>
        </div>
    );
}

export default Board;