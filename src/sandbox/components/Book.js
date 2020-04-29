import * as React from 'react';

// class Book extends React.Component {
//     render() {
//         return (
//             <div>
//                 <div>Автор: {this.props.autor}</div>
//                 <div>Жанр: {this.props.type}</div>
//                 <div>Цена: {this.props.price}</div>
//                 <div>Кол-во стр. {this.props.pages}</div>
//             </div>
//         )
//     }
// }

const Book = props => {
    const {name, author, type, price, pages} = props;
    return (
        <div>
            <h3>{name}</h3>
            <div>Автор: {author}</div>
            <div>Жанр: {type}</div>
            <div>Цена: {price}</div>
            <div>Кол-во стр. {pages}</div>
        </div>
    )
};

export default Book;