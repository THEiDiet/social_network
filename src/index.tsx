import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./components/state/reduxStore";
import {Provider} from "react-redux";

const rerender = (state: any) => {

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    )
}
rerender(store.getState())
store.subscribe(() => rerender(store.getState()))

reportWebVitals();


