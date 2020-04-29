import * as React from 'react';

const ListCommentItem = props => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <div className="col-sm-8 p-0 mr-2">{props.text}</div>
            {
                props.isFullData
                    ? <div className="col-sm-4 p-0">
                        <div><b>Task:</b> {props.taskName}</div>
                        <hr/>
                        <div><b>Date:</b> {props.date}</div>
                        <div className="d-flex align-items-start btn-group btn-group-sm">
                            <button
                                style={{fontSize: 12}}
                                className="btn btn-sm btn-info"
                                onClick={() => props.likeComment(props.commentID)}>
                                Like
                                <span className="ml-2 badge badge-light">{props.likes}</span>
                            </button>

                            <button
                                style={{fontSize: 12}}
                                className="btn btn-sm btn-danger"
                                onClick={() => props.deleteComment(props.commentID)}>
                                &#10008;
                            </button>
                        </div>
                    </div>
                    : <div className="col-sm-4 align-items-start p-0 btn-group btn-group-sm">
                        <button
                            style={{fontSize: 10}}
                            className="btn btn-sm btn-info"
                            onClick={() => props.likeComment(props.commentID)}>
                            Like
                            <span className="ml-2 badge badge-light">{props.likes}</span>
                        </button>

                        <button
                            style={{fontSize: 10}}
                            className="btn btn-sm btn-danger"
                            onClick={() => props.deleteComment(props.commentID)}>
                            &#10008;
                        </button>
                    </div>
            }
        </li>
    )
};


export default ListCommentItem;