const initialstate = {
    isLoading: false,
    username: '',
    password: '',
    error: false,
    errorMessage: 'Password or Email is incorrect',
    success: false,
    token: ''
};

const loginReducer = (state = initialstate, action) => {
    switch (action.type){
        case 'LOG_IN_FORM_SUBMITTED':
            return{
                ...state,
                isLoading: true
            }
        case 'LOGIN_FAIL':
            return {
                ...state,
                isLoading: false,
                error: true,
                username: '',
                password: '',
                errorMessage: state.errorMessage
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLoading: false,
                success: true,
                token: action.payload
            }
        case 'LOG_OUT':
            return{
                ...state,
                success: false
            }
        default:
            return state;
    }
};

export default loginReducer;