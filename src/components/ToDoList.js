import React, { useState } from 'react';
import './ToDo.css'
const ToDoList = () => {
    const [currentTask, setCurrentTask] = useState('');
    const [taskCollection, setTaskCollection] = useState([]);

    const addTask = () => {
        if (currentTask) {
            setTaskCollection([...taskCollection, currentTask]);
        }
        setCurrentTask('');
    };

    const editTask = (index) => {
        const newText = prompt('Enter the new Task');
        if (newText) {
            const tempTask = [...taskCollection];
            tempTask[index] = newText;
            setTaskCollection(tempTask);
        }
    };

    const deleteTask = (index) => {
        const tempTask = [...taskCollection];
        tempTask.splice(index, 1);
        setTaskCollection(tempTask);
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
                    <button onClick={addTask}>Add Task</button>
                </div>

                <div className="task-list">
                    {taskCollection.map((task, index) => (
                        <div key={index} className="task-item">
                            <span>{task}</span>
                            <div className="task-actions">
                                <button className="edit-btn" onClick={() => editTask(index)}>
                                    Edit
                                </button>
                                <button className="delete-btn" onClick={() => deleteTask(index)}>
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
