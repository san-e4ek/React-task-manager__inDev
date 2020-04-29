import * as React from 'react';


const UserCard = props => {
    const {firstName, lastName, email} = props;
    return (
        <div>
            <h3>Владалец</h3>
            <div>Имя: {firstName}</div>
            <div>Фамилия: {lastName}</div>
            <div>Почта: {email}</div>
        </div>
    )
};

export default UserCard;