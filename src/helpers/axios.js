import axios from 'axios';
import { api } from '../urlConfig';
import store from '../store';

const token = window.localStorage.getItem('token');

const axiosInstance = axios.create({
    baseURL: api,
    headers: {
        'idtoken': token ? `${token}` : ''
    }
});

axiosInstance.interceptors.request.use((req) => {
    const { auth } = store.getState();
    if(auth.token){
        req.headers.idtoken = `${auth.token}`;
    }
    return req;
})

export default axiosInstance;