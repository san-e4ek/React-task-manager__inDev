import * as React from 'react';


const Bank = props => {
    const {name, bik, logo} = props;
    return (
        <div className={"bank"}>
            <div>
                <h3>Банк</h3>
                <div>Название: {name}</div>
                <div>БИК: {bik}</div>
            </div>
            <div>
                <img src={logo} alt="Disel"/>
            </div>
        </div>
    )
}

export default Bank;