import * as React from 'react';

class Teacher extends React.Component{
    render() {
        return(
            <div>
                <h4>Преподаватель: {this.props.name}</h4>
                <div>Возраст: {this.props.age}</div>
                <div>Специальность: {this.props.skill}</div>
            </div>
        )
    }
}

export default Teacher;