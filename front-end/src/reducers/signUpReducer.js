const initialState = {
    signUpSuccess: false,
    userExistErrorMessage:'Looks like you have already registered. Please click below to login',
    userExistError: false,
    signUpLoading: false,
}

const signUpReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SIGN_UP_SUBMITTED':
            return{
                ...state,
                signUpLoading: true
            }
        case 'SIGN_UP_SUCCESS':
            return{
                ...state,
                signUpSuccess: true,
                signUpLoading: false
            }
        case
    }
}