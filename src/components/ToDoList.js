import React, { useState } from 'react';
import './ToDo.css'
import {useDispatch, useSelector} from 'react-redux';
import {addTask , editTask , deleteTask} from './redux/actions'
const ToDoList = () => {
    const [currentTask, setCurrentTask] = useState('');
    const taskCollection = useSelector((state)=> state.tasks);
    const dispatch = useDispatch();

    const addTaskFunction = () => {
        if (currentTask) {
            dispatch(addTask(currentTask))
           
        }
        setCurrentTask('');
    };

    const editTaskFunction = (index) => {
        const newText = prompt('Enter the new Task');
        if (newText) {
            dispatch(editTask(newText, index));
        }
    };

    const deleteTaskFunction = (index) => {
        dispatch(deleteTask(index))
    };

    return (
        <div className="container">
            <div className="content">
                <h1>Get Things Done</h1>
                <div className="task-input">
                    <input
                        type="text"
                        placeholder="What is the Task Today?"
                        onChange={(e) => setCurrentTask(e.target.value)}
                        value={currentTask}
                    />
                    <button onClick={addTaskFunction}>Add Task</button>
                </div>

                <div className="task-list">
                    {taskCollection.map((task, index) => (
                        <div key={index} className="task-item">
                            <span>{task}</span>
                            <div className="task-actions">
                                <button className="edit-btn" onClick={() => editTaskFunction(index)}>
                                    Edit
                                </button>
                                <button className="delete-btn" onClick={() => deleteTaskFunction(index)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ToDoList;
