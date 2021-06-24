import { authConstants } from "./constants";
import { auth } from "../firebase";
import axios from "../helpers/axios";

export const login = (email, password) => {
    return async (dispatch) => {
        dispatch({ type: authConstants.LOGIN_REQUEST });
        try {
            await auth.signInWithEmailAndPassword(email, password)
            auth.onAuthStateChanged(async (user) => {
                if (user) {
                    const token = user.uid;
                    const res = await axios.post(`/user/get_user`, { id: user.uid })
                    if (res.status === 200) {
                        let { user } = res.data
                        localStorage.setItem('token', token);
                        localStorage.setItem('user', JSON.stringify(user));
                        dispatch({
                            type: authConstants.LOGIN_SUCCESS,
                            payload: {
                                token, user
                            }
                        })
                    }
                }
            })
        } catch (error) {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: { error: "User namae or password is incorrect" }
            });
        }
    }
}

export const signout = () => {
    return async dispatch => {

        dispatch({ type: authConstants.LOGOUT_REQUEST });
        const token = window.localStorage.getItem('token');
        console.log('tk', token)
        auth.signOut().then(() => {
            localStorage.clear();
        })
        .then(() => {
            const token2 = window.localStorage.getItem('token');
            console.log('tk2', token2)
            dispatch({ type: authConstants.LOGOUT_SUCCESS });
        })
    }
}

export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));
        if (token) {
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        } else {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: { error: "User namae or password is incorrect" }
            });
        }
    }
}


