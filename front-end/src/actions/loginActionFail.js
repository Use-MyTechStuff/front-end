const LOGIN_FAIL = "LOGIN_FAIL"

const loginActionFail = dispatch => {
    return (dispatch) => {
        dispatch({type:LOGIN_FAIL})
    }
}

export default loginActionFail