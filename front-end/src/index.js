import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import rootReducer from "./reducer/rootReducer";
import thunk from "redux-thunk";
import reduxPromise from "redux-promise-middleware";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import reportWebVitals from './reportWebVitals';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
const store = createStore(rootReducer, applyMiddleware(thunk, logger, reduxPromise));

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '30px',
  containerStyle: {
    zIndex: 1051
  },
  // you can also just use 'scale'
  transition: transitions.FADE
}
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
