import * as React from 'react';
import SubListTasks from './SubListTasks';

const ListTasks = props => {
    const todoLists = props.tasks.filter(task => task.status === 'ToDo');
    const progressLists = props.tasks.filter(task => task.status === 'Progress');
    const completeLists = props.tasks.filter(task => task.status === 'Complete');

    const todoListsComments = props.comments.filter(comment => todoLists.map(task => task.id).includes(comment.taskID));
    const progressComments = props.comments.filter(comment => progressLists.map(task => task.id).includes(comment.taskID));
    const completeComments = props.comments.filter(comment => completeLists.map(task => task.id).includes(comment.taskID));

    return (
        <div className="row justify-content-around back p-4 mt-3">
            <SubListTasks
                name={"ToDo"}
                comments={todoListsComments}
                tasks={todoLists}
                updateTask={props.updateTask}
                addNewTask={props.addNewTask}
                addNewComment={props.addNewComment}
                deleteComment={props.deleteComment}
                likeComment={props.likeComment}
            />
            <SubListTasks
                name={"Progress"}
                comments={progressComments}
                tasks={progressLists}
                updateTask={props.updateTask}
                addNewTask={props.addNewTask}
                addNewComment={props.addNewComment}
                deleteComment={props.deleteComment}
                likeComment={props.likeComment}
            />
            <SubListTasks
                name={"Complete"}
                comments={completeComments}
                tasks={completeLists}
                updateTask={props.updateTask}
                addNewTask={props.addNewTask}
                addNewComment={props.addNewComment}
                deleteComment={props.deleteComment}
                likeComment={props.likeComment}
            />
        </div>
    )
};

export default ListTasks;