const addComment = comment => {
    return {
        type: 'ADD_COMMENT',
        text: comment.text,
        date: comment.date,
        taskID: comment.taskID,
        commentID: comment.commentID,
        likes: comment.likes
    }
};

const deleteComment = commentID => {
    return {
        type: 'DELETE_COMMENT',
        commentID: commentID
    }
};

const likeComment = commentID => {
    return {
        type: 'LIKE_COMMENT',
        commentID: commentID
    }
};

const sortCommentsDate = () => {
    return {
        type: 'SORT_COMMENT_DATE'
    }
};

const sortCommentsLikes = () => {
    return {
        type: 'SORT_COMMENT_LIKES'
    }
};

export {addComment, deleteComment, likeComment, sortCommentsDate, sortCommentsLikes};