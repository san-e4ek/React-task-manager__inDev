import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import {createStore} from "redux";
// import App from './sandbox/components/App';
import configurationStore from './store';
import {Provider} from 'react-redux';
import App from './App';

// const add = (state = {
//     count: 0
// }, action) => {
//     switch (action.type) {
//         case 'ADD':
//             return {...state, count: state.count + action.num};
//         case 'DEL':
//             return {...state, count: state.count - action.num};
//         default:
//             return state;
//     }
//     return state;
// };
//
// let store = createStore(add);
// store.subscribe(() => console.log(store.getState()));
//
// setInterval(() => {
//     store.dispatch({type: 'ADD', num: 20});
//
// }, 1000);
// store.dispatch({type: 'ADD', num: 10});
// store.dispatch({type: 'DEL', num: 10});

const store = configurationStore;

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));