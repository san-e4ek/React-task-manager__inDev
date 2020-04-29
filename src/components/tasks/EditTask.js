import * as React from 'react';
import {useState} from 'react';

const EditTask = props => {
    const [task, changeTask] = useState({
        name: props.taskName,
        deadline: props.taskDeadline,
        description: props.taskDescription
    });

    const handleChangeInput = e => {
        changeTask({...task, [e.target.name]: e.target.value})
    };

    const submitForm = e => {
        e.preventDefault();
        props.changeTask({...task});
    };

    return (
        <form onClick={e => e.stopPropagation()} onSubmit={submitForm} className="d-flex flex-column">
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Task name:</label>
                <input className="form-control" onChange={handleChangeInput} type="text" name={"name"}
                       value={task.name}/>
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Deadline:</label>
                <input className="form-control" onChange={handleChangeInput} type="date" name={"deadline"}
                       value={task.deadline}/>
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Description:</label>
                <textarea className="form-control" onChange={handleChangeInput} type="text" name={"description"}
                          value={task.description}></textarea>
            </div>

            <button className="btn-sm btn-success" type={"submit"}>edit</button>

        </form>
    )
};

export default EditTask;