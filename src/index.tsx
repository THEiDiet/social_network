import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./components/state/reduxStore";
import {StateType} from "./components/state/state";

const rerender = () => {
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    )
}
rerender()
store.subscribe(rerender)
// ReactDOM.render(
//         <App state={state} addPost={addPost}/>,
//     document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
