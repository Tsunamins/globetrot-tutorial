//original
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// added
//removed store dependencies to external store file
//moved thunk to store.js also
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
//removed usersReducer to external store file
import store from './store.js'

//moved store related code to external store file

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>  
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
