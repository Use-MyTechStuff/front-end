const LOGIN_SUCCESS = "LOGIN_SUCCESS"

const loginSuccessAction = (token) => {
    return (dispatch) => {
        dispatch({type:LOGIN_SUCCESS, payload:token})
    }
}

export default loginSuccessAction