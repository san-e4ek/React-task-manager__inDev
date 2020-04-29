import * as React from 'react';

// class User extends React.Component{
//     render() {
//         return(
//             <div>
//                 <h2>{this.props.name}</h2>
//                 <hr/>
//                 <div>Возраст: {this.props.age}</div>
//                 <hr/>
//                 <div>Навык: {this.props.skill}</div>
//             </div>
//         )
//     }
// }

const User = props => {
    const {name, age, skill} = props;
    return(
        <div>
            <h2>{name}</h2>
            <hr/>
            <div>Возраст: {age}</div>
            <hr/>
            <div>Навык: {skill}</div>
        </div>
    )
};

export default User;