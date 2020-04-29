import * as React from 'react';
import Teacher from './Teacher';
import School from './School';

class Course extends React.Component{
    render() {
        return(
            <div>
                <Teacher {...this.props.teacher}></Teacher>
                <hr/>
                <h4>Курс: {this.props.name}</h4>
                <div>Продолжительность: {this.props.time}</div>
                <div>Цена: {this.props.price}</div>
                <hr/>
                <School {...this.props.school}></School>
            </div>
        )
    }
}

export default Course;