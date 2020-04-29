import * as React from 'react';
import Book from './Book';
import Course from './course/Course';
import Preloader from './Preloader';
import UsersList from "./users/UsersList";
import CardsList from "./cards/CardsList";
import Car from "./Car";
import Wallet from "./Wallet";
import CarForm from './CarForm';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'Hello, world!',
            count: 0,
            book: null,
            course: null,
            // cards: null,
            users: null,
            hideShowBtnName: 'Скрыть курс',
            hideShowBalanceBtnName: 'Показать баланс',
            isShowBalance: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleCourseHideShow = this.handleCourseHideShow.bind(this);
        this.handleRandomSort = this.handleRandomSort.bind(this);
        this.handleBalanceHideShow = this.handleBalanceHideShow.bind(this);

        // setInterval(() => {
        //     this.setState({count: this.state.count + 1});
        //     this.setState({book: {...this.state.book, price: this.state.book.price + 1}});
        // }, 1000)
    }

    handleClick() {
        this.setState({book: {...this.state.book, name: 'Капитанская дочка'}});
    }


    handleCourseHideShow() {
        this.setState({
            course: {...this.state.course, show: !this.state.course.show},
            hideShowBtnName: this.state.course.show ? 'Показать курс' : 'Скрыть курс'
        });
    }

    handleRandomSort() {
        // const newUsers = [...this.state.users];
        // newUsers.sort(() => Math.random() - 0.5);
        // this.setState({users: newUsers});

        // this.setState({users: this.state.users.sort(() => Math.random() - 0.5)}) - ошибка, так нельзя
        this.setState({users: [...this.state.users].sort(() => Math.random() - 0.5)});
    }

    handleBalanceHideShow() {
        this.setState({
           isShowBalance: !this.state.isShowBalance,
            hideShowBalanceBtnName: !this.state.isShowBalance ? 'Скрыть баланс' : 'Показать баланс'
        });
    }

    render() {
        return (
            <>
                <Wallet></Wallet>
                <hr/>
                <Car></Car>
                <hr/>
                <CarForm></CarForm>
                <hr/>
                <div>{this.state.message}</div>
                <div>{this.state.count}</div>
                <hr/>
                {
                    this.state.users === null
                        ? <Preloader></Preloader>
                        : <UsersList users={this.state.users}></UsersList>
                }
                <hr/>
                <button onClick={this.handleClick}>Кликни на меня!</button>
                <button onClick={this.handleCourseHideShow}>{this.state.hideShowBtnName}</button>
                <button onClick={this.handleRandomSort}>Перемешать пользователей</button>
                <hr/>
                {
                    this.state.book === null
                        ? <Preloader></Preloader>
                        : <Book{...this.state.book}></Book>
                }
                <hr/>
                {
                    this.state.course === null
                        ? <Preloader></Preloader>
                        : this.state.course.show
                        ? <Course {...this.state.course}></Course>
                        : null
                }
                <hr/>
                <button onClick={this.handleBalanceHideShow}>{this.state.hideShowBalanceBtnName}</button>
                {/*{*/}
                {/*    this.state.cards === null*/}
                {/*        ? <Preloader></Preloader>*/}
                {/*        : <CardsList isShowBalance={this.state.isShowBalance} cards={this.state.cards}></CardsList>*/}
                {/*}*/}
                <CardsList isShowBalance={this.state.isShowBalance}></CardsList>
                <hr/>
            </>
        )
    }

    componentDidMount() {
        setTimeout(() => {
            fetch('/data.json')
                .then(result => result.json())
                .then(data => {
                    this.setState({book: {...data.book}});
                    this.setState({course: {...data.course, show: true}});
                })
                .catch(e => e.message);

            // fetch('/dataCards.json')
            //     .then(result => result.json())
            //     .then(data => this.setState({cards: [...data]}))
            //     .catch(e => e.message);

            fetch('./users.json')
                .then(result => result.json())
                .then(data => this.setState({users: [...data]}))
                .catch(e => e.message);
        }, 2000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Компонент изменился');
    }
}

export default App;