import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import usersReducer from './reducers/usersReducer.js'
import thunk from 'redux-thunk';


const reducer = combineReducers({
    users: usersReducer
    // shorthand syntax for users: users is users, when using similar naming conventions, incl having import users in the import list above, in this case changed for clarity of this block of code
  
  })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

//create store takes args: a reducer (not made yet), and the above middleware line
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store