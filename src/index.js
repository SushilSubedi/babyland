import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer/rootReducer';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';


axios.defaults.baseURL ='https://babyland-2b68b.firebaseio.com/';

const composeEnhancers = process.env.NODE_ENV==='development'? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :null || compose;

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

ReactDOM.render(app,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
