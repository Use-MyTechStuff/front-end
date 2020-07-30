import axios from 'axios';

// Authenticator to get token from local storage
export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
      headers: {
        authorization: token
      },
      baseURL: "https://use-my-tech-stuff-be.herokuapp.com/"
    });
}