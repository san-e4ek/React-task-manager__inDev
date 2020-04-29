const initialState = [
    {
        text: 'Важная задча. Обрати внимание',
        date: '2020-04-15',
        taskID: 104,
        commentID: 313,
        likes: 0
    }
];

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [...state, action];
        case 'DELETE_COMMENT':
            const newStates = [...state].filter(item => item.commentID !== action.commentID);
            return newStates;
        case 'LIKE_COMMENT':
            const likeStates = [...state];
            likeStates.map(item => item.commentID === action.commentID ? item.likes += 1 : null);
            return likeStates;
        case 'SORT_COMMENT_DATE':
            return [...state].sort((a, b) => a.date - b.date);
        case 'SORT_COMMENT_LIKES':
            return [...state].sort((a, b) => a.likes - b.likes);
        default:
            return state;
    }
};

export {commentsReducer};