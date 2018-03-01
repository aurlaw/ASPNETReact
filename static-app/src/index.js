import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './index.css';
import App from './App';

const initialState = window.initialReduxState;
const store = configureStore(initialState);

const rootElement = document.getElementById('root');


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement);

