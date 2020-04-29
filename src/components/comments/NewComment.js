import * as React from 'react';
import {useState} from 'react';

const NewComment = props => {
    const [comment, updateComment] = useState('');

    const submitForm = e => {
        e.preventDefault();
        props.addNewComment(comment);
        updateComment('');
    };

    return (
        <form onClick={e => e.stopPropagation()} className="mt-2">
            <div className="from-group">
                <textarea
                    className="form-control"
                    onKeyUp={e => e.keyCode === 13 ? submitForm(e) : null}
                    onChange={e => updateComment(e.target.value)}
                    name={"comment"}
                    value={comment}
                    placeholder={"Ваш комментарий"}
                >
                </textarea>
            </div>
        </form>
    )
};

export default NewComment;