import {SET_TOKEN, TOKEN_AQUIRED, USER, GET_USER, ALL_STUFF, SET_ERROR, GET_STUFF, USER_STUFF, USER_LOGOUT} from '../actions/';

const initialState ={
    isLoading: false,
    auth: false,
    user:  localStorage.getItem('user_id'),
    userStuff: [],
    stuff: [],
    error: ''
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                isLoading: true,
            };
        case TOKEN_AQUIRED:
            return {
                ...state,
                isLoading: false,
                auth: true
            }
        case USER: 
            return{
                ...state,
                user: action.payload
            }
        case GET_USER:
            return {
                ...state,
                isLoading: true
            };
        case USER_STUFF:
            return {
              ...state,
              isLoading: false,
              userStuff: action.payload,
              error: ""
            };
        case GET_STUFF:
            return{
                ...state,
                isLoading: true
            };
        case ALL_STUFF:
            return {
                ...state,
                isLoading: false,
                stuff: action.payload,
                error: ''
            }
        case USER_LOGOUT:
            return {
                ...state,
                auth: false
            }
        case SET_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
};