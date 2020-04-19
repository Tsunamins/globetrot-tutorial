//original
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// added
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import usersReducer from './reducers/usersReducer.js'

//somewhat temporary below, to fix error, for now
//all of below should be incorporated into a more organized fileset outside of
//here but to demosntrate getting things up and running for now
//changed some code to an external reducers/usersReducers file, now moving more around wiht next commit
const reducer = combineReducers({
  users: usersReducer
  // shorthand syntax for users: users is users, when using similar naming conventions, incl having import users in the import list above, in this case changed for clarity of this block of code

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

//create store takes args: a reducer (not made yet), and the above middleware line
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

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
