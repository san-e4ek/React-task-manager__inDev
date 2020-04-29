import * as React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import Preloader from '../Preloader';
import Card from "./Card";

const CardsList = props => {
    const [cardsData, changeCardsData] = useState([]);

    const numCardRandom = Math.round(Math.random() * 8999 + 1000);

    const [cards, changeCard] = useState({
        numCard: numCardRandom,
        balanceCard: '',
        limitCard: '',
    });

    const [newCards, addCard] = useState([]);

    const inputChange = e => {
        if (e.target.name === 'balanceCard') {
            changeCard({...cards, balanceCard: e.target.value <= 500000 ? e.target.value : cards.balanceCard})
        } else if (e.target.name === 'limitCard') {
            changeCard({...cards, limitCard: e.target.value <= 500000 ? e.target.value : cards.limitCard})
        }
    };

    const formSubmit = e => {
        e.preventDefault();

        addCard([...newCards, {...cards, key: cards.key + 1}]);
        changeCard({
            numCard: numCardRandom,
            balanceCard: '',
            limitCard: ''
        });
    };


    useEffect(() => {
        setTimeout(() => {
            fetch('/dataCards.json')
                .then(result => result.json())
                .then(data => changeCardsData([...data]))
        }, 2000);

    }, []);

    return (
        <>
            <form onSubmit={formSubmit}>
                <input onChange={inputChange} type="number" name={"numCard"} value={cards.numCard} disabled/>
                <input onChange={inputChange} type="number" name={"balanceCard"} value={cards.balanceCard}
                       placeholder={"Укажите баланс"}/>
                <input onChange={inputChange} type="number" name={"limitCard"} value={cards.limitCard}
                       placeholder={"Укажите лимит"}/>
                <button type={"submit"}>Добавить карту</button>
            </form>

            <ul>
                {newCards.map(newCardItem =>
                    <li className={"card"} key={newCardItem.numCard}>
                        <div>Номер карты: **** **** **** {newCardItem.numCard}</div>
                        <div>Баланс карты: {newCardItem.balanceCard} руб.</div>
                        <div>Лимит трат карты: {newCardItem.limitCard} руб.</div>
                    </li>
                )}
            </ul>

            {
                cardsData === null
                    ? <Preloader></Preloader>
                    : <ul>
                        {cardsData.map(cardItem =>
                            <li key={cardItem.number}>
                                <Card isShowBalance={props.isShowBalance} {...cardItem}></Card>
                            </li>
                        )}
                    </ul>
            }
        </>
    )
};

export default CardsList;