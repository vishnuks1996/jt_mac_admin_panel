import axios from "../helpers/axios"
import { initialDataConstants } from "./constants";

const getInitialData = (token) => {
    return async (dispatch) => {
        dispatch({ type: initialDataConstants.GET_ALL_INITIAL_DATA_REQUEST });
        const token = window.localStorage.getItem('token');
        console.log('tk3', token)
        try {
            const res = await axios.get(`mentor/get_home_page_data`, { headers: { 'idtoken': token ? `${token}` : '' } })
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

export const attendAppointment = (id) => {
    return async dispatch => {
        try {
            dispatch({ type: initialDataConstants.ATTEND_APPOINTMENT_REQUEST });
            const res = await axios.post(`mentor/attent_appointment/${id}`);
            if (res.status === 200) {
                dispatch({
                    type: initialDataConstants.ATTEND_APPOINTMENT_SUCCESS,
                });
                dispatch(getInitialData())
            }
        } catch (error) {
            const err = error.response.data.message
            console.log(err)
            dispatch({
                type: initialDataConstants.ATTEND_APPOINTMENT_FAILURE,
                payload: { error: err }
            });
        }
    }
}

export const approveMentor = (id) => {
    return async dispatch => {
        try {
            dispatch({
                type: initialDataConstants.APPROVE_MENTOR_REQUEST,
                payload: id
            });
            const res = await axios.post(`mentor/approve_mentor/${id}`);
            if (res.status === 201) {
                dispatch({
                    type: initialDataConstants.APPROVE_MENTOR_SUCCESS,
                });
                dispatch(getInitialData())
            }
        } catch (error) {
            const err = error.response.data.message
            console.log(err)
            dispatch({
                type: initialDataConstants.APPROVE_MENTOR_FAILURE,
                payload: { error: err }
            });
        }
    }
}

export {
    getInitialData
}