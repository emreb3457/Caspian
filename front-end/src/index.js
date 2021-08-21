import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import rootReducer from "./reducer/rootReducer";
import thunk from "redux-thunk";
import reduxPromise from "redux-promise-middleware";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer, applyMiddleware(thunk, logger, reduxPromise));
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
