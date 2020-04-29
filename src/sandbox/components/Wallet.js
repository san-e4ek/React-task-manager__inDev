import * as React from 'react';
import {useState} from 'react';

const Wallet = props => {
    const [wallet, setWallet] = useState({
        money: 45000,
        onePayLimit: 1000,
        purchases: 0
    });

    const spentMoney = () => {
        const purchasePlus = Math.round(Math.random() * 3000);
        purchasePlus < wallet.onePayLimit && wallet.money - purchasePlus > 0
            ? setWallet({...wallet, money: wallet.money - purchasePlus,
            purchases: wallet.purchases + purchasePlus
            })
            : null
    };

    return (
        <div>
            <h3>Your wallet: {wallet.money} $</h3>
            <div>Purchases: {wallet.purchases} $</div>
            <button onClick={spentMoney}>Spent money</button>
        </div>
    )
};

export default Wallet;