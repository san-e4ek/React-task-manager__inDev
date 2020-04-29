import * as React from 'react';
import {useState} from 'react';
import UserCard from './UserCard';
import Bank from './Bank';


const Card = props => {
    const {number, balance, ...card} = props;

    const [cashBack, setCashBack] = useState({
        cashBack: 0,
        cashBackLimit: 3000
    });

    const getCashBack = () => {
        const cashBackPlus = Math.round(Math.random() * 3000);
        cashBack.cashBack + cashBackPlus < cashBack.cashBackLimit
            ? setCashBack({...cashBack, cashBack: cashBack.cashBack + cashBackPlus})
            : null
    };

    return (
        <div className={"card"}>
            <button onClick={getCashBack}>Получи кэшбэк</button>
            <h4>Банковская карта: **** **** **** {number}</h4>
            {
                props.isShowBalance
                    ? <div>Баланс: {balance}</div>
                    : null
            }

            <div>Кэшбэк: {cashBack.cashBack} руб.</div>
            <hr/>
            <UserCard {...card.userCard}></UserCard>
            <hr/>
            <Bank {...card.bank}></Bank>
        </div>
    )
};

export default Card;