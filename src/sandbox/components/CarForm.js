import * as React from 'react';
import {useState} from 'react';

const CarForm = props => {
    const [formData, changeForm] = useState({
        carName: '',
        limitSpeed: '',
        carCompany: '',
        key: null
    });

    const [cars, changeCars] = useState([]);

    const inputChange = e => {
        console.log(e.target.value);
        if (e.target.name === 'carName') {
            changeForm({...formData, carName: e.target.value.length <= 10 ? e.target.value : formData.carName})
        } else if (e.target.name === 'limitSpeed') {
            changeForm({...formData, limitSpeed: e.target.value <= 500 ? e.target.value : formData.limitSpeed})
        } else if (e.target.name === 'carCompany') {
            changeForm({...formData, carCompany: e.target.value});
        }

        // changeForm({...formData, ...{[e.target.name]: e.target.value}})
    };

    const formSubmit = e => {
        e.preventDefault();
        changeCars([...cars, {...formData, key: formData.key + 1}]);
        changeForm({
            carName: '',
            limitSpeed: '',
            carCompany: ''
        });
    };

    return (
        <>
            <form onSubmit={formSubmit}>
                <input onChange={inputChange} type="text" name={"carCompany"} value={formData.carCompany}
                       placeholder={"Бренд машины"}/>
                <input onChange={inputChange} type="text" name={"carName"} value={formData.carName}
                       placeholder={"Модель машины"}/>
                <input onChange={inputChange} type="number" name={"limitSpeed"} value={formData.limitSpeed}
                       placeholder={"Скоростной лимит"}/>
                <button type={"submit"}>Добавить машину</button>
            </form>
            <ul>
                {cars.map(carItem => <li key={carItem.key}>Бренд: {carItem.carCompany} - Модель: {carItem.carName} - SpeedLimit: {carItem.limitSpeed}</li>)}
            </ul>
        </>
    )
};

export default CarForm;