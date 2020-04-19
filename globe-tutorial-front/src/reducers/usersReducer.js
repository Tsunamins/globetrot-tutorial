//so setting up reducer
// needs to have args of state and an action
//the state of the focus/return, in this case users
//the action is meant to be switched depending on which type of action is passed in
//state - has to have a default, an empty version of the reducer focus (what it is responsible for returning)
//state is listed here, like this, as opposed to how it is in expense tracker tutorial
//bc - using combineReducers

export default (state = [], action) => {
    switch(action.type){
        default:
            return state
    }
}