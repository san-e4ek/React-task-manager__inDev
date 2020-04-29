import * as React from 'react';
import ListTasks from './components/tasks/ListTasks';
import NewFormTask from "./components/tasks/NewFormTask";
import {connect} from "react-redux";
import {addTask, editTask} from "./store/tasks/actions";
import {addComment, deleteComment, likeComment, sortCommentsDate, sortCommentsLikes} from "./store/comments/actions";
import {DeskComments} from "./components/comments/DaskComments";

const App = props => {
    const updateTask = (id, newName, newDeadline, newDescription, newStatus) => {
        const newTask = {
            id: id,
            name: newName,
            deadline: newDeadline,
            description: newDescription,
            status: newStatus
        };

        props.editTask(newTask);
    };

    const addNewTask = (taskName, newStatus) => {
        const newTask = {
            id: Math.round(Math.random() * 899 + 100),
            name: taskName,
            deadline: '',
            description: '',
            status: newStatus || 'ToDo'
        };
        props.addTask(newTask);
    };

    const addNewComment = (taskID, newComment) => {
        const comment = {
            text: newComment,
            date: new Date().toLocaleDateString(),
            taskID: taskID,
            commentID: Math.round(Math.random() * 899 + 100),
            likes: 0
        };
        props.addComment(comment)
    };

    const deleteComment = commentID => {
        props.deleteComment(commentID);
    };

    const likeComment = commentID => {
        props.likeComment(commentID);
    };

    const sortCommentsDate = () => {
        props.sortCommentsDate();
    };

    const sortCommentsLikes = () => {
        props.sortCommentsLikes();
    };

    return (
        <div className="container">
            <header className="text-center">
                <h1>Аналог Трелло</h1>
            </header>

            <div className="col-md-6 m-auto p-3 back">
                <NewFormTask addNewTask={addNewTask}/>
            </div>

            <ListTasks
                likeComment={likeComment}
                deleteComment={deleteComment}
                addNewComment={addNewComment}
                comments={props.comments}
                updateTask={updateTask}
                addNewTask={addNewTask}
                tasks={props.tasks}
            />
            <DeskComments
                tasks={props.tasks}
                comments={props.comments}
                likeComment={likeComment}
                deleteComment={deleteComment}
                sortDate={sortCommentsDate}
                sortLikes={sortCommentsLikes}
            />
        </div>
    )
};

const mapStateToProps = state => ({
    tasks: state.tasks,
    comments: state.comments
});
export default connect(mapStateToProps, {addTask, editTask, addComment, deleteComment, likeComment, sortCommentsDate, sortCommentsLikes})(App);