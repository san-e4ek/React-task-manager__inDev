import * as React from 'react';
import User from "./User";


const UsersList = props => {
    const {users} = props;
    return(
        <div>
            <ul>
                {users.map(user => <li key={user.name}><User {...user}></User></li>)}
            </ul>
        </div>
    )
};

export default UsersList;