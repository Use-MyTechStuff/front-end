import { axiosWithAuth } from "../utils/axiosWithAuth";




export const SET_TOKEN = "SET_TOKEN";
export const TOKEN_AQUIRED = "TOKEN_AQUIRED";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER = "USER";
export const GET_USER = "GET_USER";
export const USER_STUFF = "USER_STUFF";
export const SET_ERROR = "SET_ERROR";
export const NEW_USER = "NEW_USER";
export const GET_STUFF = "GET_STUFF";
export const ALL_STUFF = "ALL_STUFF";


export const loginData = (credential, history) => dispatch => {
  
  dispatch({ type: SET_TOKEN });
  axiosWithAuth()
    .post("/api/users/login", credential)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user_id", res.data.user.id);
      dispatch({ type: TOKEN_AQUIRED });
      dispatch({ type: USER, payload: res.data.user.id });
      history.push(`/user-page/${res.data.user.id}`);
    })
    .catch(err => {
      console.error("You are getting an error of", err.response);
    });
};

export const logout = () => dispatch => {
  
  dispatch({ type: USER_LOGOUT });
  
  localStorage.clear("token");
};

export const registerUser = (newUser, history) => dispatch => {
  
  dispatch({ type: NEW_USER });
  axiosWithAuth()
    .post("/api/users/register", newUser)
    .then(res => {
      console.log(res);
      history.push('/browse-rentals');
    })
    .catch(err => {
      console.error("You are getting an error of", err.response);
    });
};

export const getUser = (id) => dispatch => {
  dispatch({ type: GET_USER });
  axiosWithAuth()
    .get(`/api/users/${id}/items`)
    .then(res => {
      console.log(res);
      dispatch({ type: USER_STUFF, payload: res.data });
    })
    .catch(err => {
      console.error("You are getting an error of", err.response);
      dispatch({ type: SET_ERROR, payload: "error fetching data from API!" });
    });
};

export const getTech = () => dispatch => {
  dispatch({ type: GET_STUFF });
  axiosWithAuth()
    .get("/api/items/")
    .then(res => {
      console.log(res)
      console.log("api data", res.data);
      dispatch({ type: ALL_STUFF, payload: res.data });
    })
    .catch(err => {
      console.error("You are getting an error of", err.response);
      dispatch({ type: SET_ERROR, payload: "error fetching data from API!" });
    });
};

export const addNewItem = (id, item) => dispatch => {
  axiosWithAuth()
    .post(`/api/users/${id}/items`, item) 
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err.response)
    })
};

export const rent = (id, item_id, updaterent, history) => dispatch => {
  
  axiosWithAuth()
    .put(`api/items/${item_id}`, updaterent)
    .then(res => {
      console.log("update rent:", res);
      getUser(id);
      history.push(`/browse-rentals`);
    })
    .catch(err => {
      console.log(err.response);
    });
}