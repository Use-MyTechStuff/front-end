const USER_ALREADY_EXIST = "USER_ALREADY_EXIST"

const userAlreadyExistAction = () => {
    return (dispatch) => {
        dispatch({type:USER_ALREADY_EXIST})
    }
}

export default userAlreadyExistAction