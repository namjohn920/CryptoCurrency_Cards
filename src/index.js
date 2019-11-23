import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import './index.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './app/reducers/rootReducer';
import thunkMiddleware from 'redux-thunk'

let middlewares = [thunkMiddleware]

const middlewareEnhancer = applyMiddleware(...middlewares);
const storeEnhancers = [middlewareEnhancer];
const composeEnhancer = composeWithDevTools(...storeEnhancers);

const store = createStore(rootReducer,composeEnhancer)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
