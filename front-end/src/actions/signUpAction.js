const SIGN_UP_SUCESS = "SIGN_UP_SUCESS"

const signUpAction = () => {
    return (dispatch) => {
        dispatch({type:SIGN_UP_SUCESS})
    }
}

export default signUpAction