import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import usersReducer from './reducers/usersReducer.js'
import thunk from 'redux-thunk';


const reducer = combineReducers({
    users: usersReducer
    // shorthand syntax for users: users is users, when using similar naming conventions, incl having import users in the import list above, in this case changed for clarity of this block of code
  
  })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

//create store takes args: a reducer (not made yet), and the above middleware line

//diff style of export method export const store = below instead of export default store, 
//changes the way it is imported in index.js as {}
//this is a good setup when more than one item can be exported, in this case this is the only thing to export
//why thunk is imported as it is and why react and react-redux items are imported the way they are
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store