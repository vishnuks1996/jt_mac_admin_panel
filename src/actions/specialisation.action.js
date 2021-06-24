import { specialisationConstants } from "./constants";
import axios from "../helpers/axios";

const getSpecialisations = () => {
    return async dispatch => {
        try {
            dispatch({ type: specialisationConstants.GET_SPECIALISATION_REQUEST });
        const res = await axios.get(`mentor/get_specialisations`);
        if (res.status === 200) {

            const { specialisations } = res.data

            dispatch({
                type: specialisationConstants.GET_SPECIALISATION_SUCCESS,
                payload: { specialisations: specialisations }
            });
        }
        } catch (error) {
            dispatch({
                type: specialisationConstants.GET_SPECIALISATION_FAILURE,
                payload: { error }
            });
        }
    }
}

export const createSpecialisation = (specialisations) => {
    return async dispatch => {
        try {
            dispatch({ type: specialisationConstants.CREATE_SPECIALISATION_REQUEST });
            const res = await axios.post(`mentor/add_specialisation`, {specialisations});
            if (res.status === 201) {
                dispatch({
                    type: specialisationConstants.CREATE_SPECIALISATION_SUCCESS,
                });
                dispatch(getSpecialisations())
            } 
        } catch (error) {
            const err = error.response.data.message
            console.log(err)
            dispatch({
                type: specialisationConstants.CREATE_SPECIALISATION_FAILURE,
                payload: { error: err }
            });
        }
    }
}

export const deleteSpecialisation = (id) => {
    return async dispatch => {
        try {
            dispatch({ type: specialisationConstants.DELETE_SPECIALISATION_REQUEST });
            const res = await axios.delete(`mentor/delete_specialisation/${id}`);
            if (res.status === 200) {
                dispatch({
                    type: specialisationConstants.DELETE_SPECIALISATION_SUCCESS,
                });
                dispatch(getSpecialisations())
            } 
        } catch (error) {
            const err = error.response.data.message
            console.log(err)
            dispatch({
                type: specialisationConstants.DELETE_SPECIALISATION_FAILURE,
                payload: { error: err }
            });
        }
    }
}

export {
    getSpecialisations
}