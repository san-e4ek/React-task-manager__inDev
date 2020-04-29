import * as React from 'react';
import ListCommentItem from "./ListCommentItem";

export const DeskComments = props => {
    const deskComments = [...props.comments].map(obj => {
        obj.taskName = '';

        const newObj = [...props.tasks];
        const findObj = newObj.find(item => item.id === obj.taskID);
        findObj ? obj.taskName = findObj.name : null;

        return obj;
    });

    return (
        <ul className="col-md-8 mt-3 p-4 back">
            <h3>Комментарии</h3>
            <div className="btn-group btn-group-sm ml-1">
                <button className="btn btn-sm btn-outline-secondary" onClick={props.sortDate}>По дате</button>
                <button className="btn btn-sm btn-secondary" onClick={props.sortLikes}>По лайкам
                </button>
            </div>

            <div className="list-group list-group-flush mt-1" style={{borderRadius: 5, border: '2px solid #9B9C9C'}}>
                {props.comments.map(item =>
                    <ListCommentItem
                        likeComment={props.likeComment}
                        deleteComment={props.deleteComment}
                        key={item.commentID} {...item}
                        {...deskComments}
                        isFullData={true}
                    />
                )}
            </div>
        </ul>
    )
};