const LOG_OUT = "LOG_OUT"

const logOutAction = () => {
    return (dispatch) => {
        dispatch({type:LOG_OUT})
    }
}

export default logOutAction