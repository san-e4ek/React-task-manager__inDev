import * as React from 'react';
import {useState} from "react";
import EditTask from "./EditTask";
import ListComments from "../comments/ListComments";
import NewComment from "../comments/NewComment";

const SubListTasksItem = props => {
    const [isEdit, updateIsEdit] = useState(false);

    const handleChangeTaskStatus = newStatus => {
        props.updateTask(props.id, props.name, props.deadline, props.description, newStatus);
    };

    const handleChangeTask = task => {
        props.updateTask(props.id, task.name, task.deadline, task.description, props.status);
        updateIsEdit(!isEdit);
    };

    const handleNewComment = (newComment) => {
        props.addNewComment(props.id, newComment)
    };

    return (
        <div className="list-group-item justify-content-center"
             style={{
                 cursor: 'pointer',
                 borderRadius: 10,
                 border: '2px solid #9B9C9C'
             }}
             onClick={() => updateIsEdit(!isEdit)}>

            {
                isEdit
                    ? <>
                        <EditTask changeTask={handleChangeTask}
                                  taskName={props.name}
                                  taskDeadline={props.deadline}
                                  taskDescription={props.description}
                        />
                        <ListComments deleteComment={props.deleteComment}
                                      comments={props.comments}
                                      likeComment={props.likeComment}
                        />
                        <NewComment addNewComment={handleNewComment}/>
                    </>
                    : <div>{props.name}</div>
            }

            <div onClick={e => e.stopPropagation()} className="d-flex btn-group btn-group-sm mt-2" role="group" aria-label="Basic example">
                <button className="btn btn-outline-info" onClick={e => handleChangeTaskStatus('ToDo')}>todo</button>
                <button className="btn btn-outline-info" onClick={e => handleChangeTaskStatus('Progress')}>progress</button>
                <button className="btn btn-success" onClick={e => handleChangeTaskStatus('Complete')}>complete</button>
                <button className="btn btn-danger" onClick={e => handleChangeTaskStatus('Delete')}>delete</button>
            </div>
        </div>
    )
};

export default SubListTasksItem;