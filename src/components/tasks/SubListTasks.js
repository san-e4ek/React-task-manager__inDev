import * as React from 'react';
import SubListTasksItem from './SubListTasksItem';
import NewFormTask from './NewFormTask';

const SubListTasks = props => {
    return (
        <div className="col-md-4">
            <h4>{props.name} <span className="badge badge-secondary">{props.tasks.length}</span></h4>
            <NewFormTask status={props.name} addNewTask={props.addNewTask}/>
            <div className=" col-md p-0 list-group mt-3">
                {props.tasks.map(item =>
                    <SubListTasksItem
                        comments={props.comments.filter(comment => comment.taskID === item.id)}
                        key={item.id} {...item}
                        updateTask={props.updateTask}
                        addNewComment={props.addNewComment}
                        deleteComment={props.deleteComment}
                        likeComment={props.likeComment}
                    />
                )}
            </div>
        </div>
    )
};

export default SubListTasks;