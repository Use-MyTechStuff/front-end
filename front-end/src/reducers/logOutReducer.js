const initialState = {
    loggedOut: false,
    loggedIn: false
}

const logOutReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOG_OUT':
            return{
                ...state,
                loggedOut: true
            }
        default:
            return state
    }
}

export default logOutReducer;