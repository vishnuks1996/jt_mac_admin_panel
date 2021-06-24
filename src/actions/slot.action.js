import { slotConstants } from "./constants";
import axios from "../helpers/axios";

const getSlot = () => {
    return async dispatch => {
        const token = window.localStorage.getItem('token');
        try {
            dispatch({ type: slotConstants.GET_SLOTS_REQUEST });
        const res = await axios.get(`mentor/create_slot`, );
        if (res.status === 200) {

            const { slots, locations } = res.data

            dispatch({
                type: slotConstants.GET_SLOTS_SUCCESS,
                payload: { slots: slots, locations: locations }
            });
        }
        } catch (error) {
            const err = error.response
            console.log(err)
            dispatch({
                type: slotConstants.GET_SLOTS_FAILURE,
                payload: { error: err }
            });
        }
    }
}

export const createSlot = (slots) => {
    return async dispatch => {
        try {
            dispatch({ type: slotConstants.CREATE_SLOTS_REQUEST });
            const res = await axios.post(`mentor/create_slot`, {slots});
            if (res.status === 201) {
                dispatch({
                    type: slotConstants.CREATE_SLOTS_SUCCESS,
                });
                dispatch(getSlot())
            } 
        } catch (error) {
            const err = error.response.data.message
            console.log(err)
            dispatch({
                type: slotConstants.GET_SLOTS_FAILURE,
                payload: { error: err }
            });
        }
    }
}

export const deleteSlot = (id) => {
    return async dispatch => {
        try {
            dispatch({ type: slotConstants.DELETE_SLOT_REQUEST });
            const res = await axios.delete(`mentor/delete_slot/${id}`);
            if (res.status === 200) {
                dispatch({
                    type: slotConstants.DELETE_SLOT_SUCCESS,
                });
                dispatch(getSlot())
            } 
        } catch (error) {
            const err = error.response.data.message
            console.log(err)
            dispatch({
                type: slotConstants.DELETE_SLOT_FAILURE,
                payload: { error: err }
            });
        }
    }
}

export {
    getSlot
}