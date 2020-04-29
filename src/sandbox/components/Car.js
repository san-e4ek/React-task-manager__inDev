import * as React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';

const Car = props => {
    const [speedConfig, setSpeed] = useState({
        currentSpeed: null,
        limitSpeed: null,
        message: null
    });
    const [millage, setMillage] = useState(0);

    const handleSpeedChange = () => {
        speedConfig.currentSpeed !== speedConfig.limitSpeed
            ? setSpeed({...speedConfig, currentSpeed: speedConfig.currentSpeed + 10})
            : null
    };

    useEffect(() => {

        fetch('/carConfig.json')
            .then(result => result.json())
            .then(data => setSpeed({...data, message: 'Данные загружены'}))
    }, []);

    return (
        <div>
            Машина со скоростью {speedConfig.currentSpeed} км/ч,
            Пробег {millage}
            <button onClick={handleSpeedChange}>Нажать на газ</button>
            <button onClick={() => setMillage(millage + 10)}>Накрутить пробег</button>
            <div>{speedConfig.message}</div>
        </div>
    )
};

export default Car;