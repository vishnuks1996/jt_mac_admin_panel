import axios from "../helpers/axios"
import { initialDataConstants } from "./constants";

export const getInitialData = (token) => {
    return async (dispatch) => {
        dispatch({ type: initialDataConstants.GET_ALL_INITIAL_DATA_REQUEST });
        const token = window.localStorage.getItem('token');
        console.log('tk3', token)
        try {
            const res = await axios.get(`mentor/get_home_page_data`, { headers: {'idtoken': token ? `${token}` : ''}})
            if (res.status === 200) {
                const { appointments, locations, mentorRequests } = res.data
                dispatch({
                    type: initialDataConstants.GET_ALL_INITIAL_DATA_SUCCESS,
                    payload: {
                        appointments, 
                        locations, 
                        mentorRequests
                    }
                })
            }
        } catch (err) {
            const error = err.response
            dispatch({
                type: initialDataConstants.GET_ALL_INITIAL_DATA_FAILURE,
                payload: { error }
            })
        }
    }
}