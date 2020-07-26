const SIGN_UP_SUBMITTED ="SIGN_UP_SUBMITTED"

const signUpSubmittedAction = () => {
    return (dispatch) => {
        dispatch({type:SIGN_UP_SUBMITTED})
    }
}

export default signUpSubmittedAction