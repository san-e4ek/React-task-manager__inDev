import * as React from 'react';
import ListCommentItem from './ListCommentItem';

const ListComments = props => {
    return (
        <ul onClick={e => e.stopPropagation()} className="col-md p-0 list-group-flush">
            {props.comments.map(comment =>
                <ListCommentItem
                    likeComment={props.likeComment}
                    deleteComment={props.deleteComment}
                    key={comment.commentID} {...comment}
                />
            )}
        </ul>
    )
};

export default ListComments;