import * as React from 'react';
import {useState, useEffect} from "react";

const NewFormTask = props => {
    const [newTaskName, updateNewTaskName] = useState('');

    const changeInput = e => {
        updateNewTaskName(e.target.value);
    };

    const handleNewTaskName = e => {
        e.preventDefault();
        props.addNewTask(newTaskName, props.status);
        updateNewTaskName('');
    };

    return (
        <form onSubmit={handleNewTaskName} className="text-center">
            <div className="form-group">
                <input
                    className="form-control"
                    onChange={changeInput}
                    type="text"
                    name={"task"}
                    value={newTaskName}
                    placeholder={"Введите название задачи"}
                    style={{
                        border: 0,
                        background: 'transparent',
                        borderBottom: '1px solid',
                        borderRadius: 0
                    }}
                />
            </div>

            <button className="btn btn-sm btn-outline-dark" type={"submit"}>Добавить задачу</button>
        </form>
    )
};

export default NewFormTask;