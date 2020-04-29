import * as React from 'react';

class School extends React.Component {
    render() {
        return(
            <div>
                <h3>Название: {this.props.name}</h3>
                <div>Адресс: {this.props.address}</div>
                <div>Сайт: <a href={this.props.site}>{this.props.site}</a></div>
            </div>
        )
    }
}

export default School;