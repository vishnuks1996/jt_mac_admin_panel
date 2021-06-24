import { locationConstants } from "./constants";
import axios from "../helpers/axios";

const getLocation = () => {
    return async dispatch => {
       
        try {
            dispatch({ type: locationConstants.GET_LOCATION_REQUEST });
        const res = await axios.get(`mentor/get_locations` );
        if (res.status === 200) {

            const { locations } = res.data

            dispatch({
                type: locationConstants.GET_LOCATION_SUCCESS,
                payload: { locations: locations }
            });
        }
        } catch (error) {
            const err = error.response
            console.log(err)
            dispatch({
                type: locationConstants.GET_LOCATION_FAILURE,
                payload: { error: err }
            });
        }
    }
}

export const createLocation = (locations) => {
    return async dispatch => {
        try {
            dispatch({ type: locationConstants.CREATE_LOCATION_REQUEST });
            const res = await axios.post(`mentor/add_location`, {locations});
            if (res.status === 201) {
                dispatch({
                    type: locationConstants.CREATE_LOCATION_SUCCESS,
                });
                dispatch(getLocation())
            } 
        } catch (error) {
            const err = error.response.data.message
            console.log(err)
            dispatch({
                type: locationConstants.CREATE_LOCATION_FAILURE,
                payload: { error: err }
            });
        }
    }
}

export const deleteLocation = (id) => {
    return async dispatch => {
        try {
            dispatch({ type: locationConstants.DELETE_LOCATION_REQUEST });
            const res = await axios.delete(`mentor/delete_location/${id}`);
            if (res.status === 200) {
                dispatch({
                    type: locationConstants.DELETE_LOCATION_SUCCESS,
                });
                dispatch(getLocation())
            } 
        } catch (error) {
            const err = error.response.data.message
            console.log(err)
            dispatch({
                type: locationConstants.DELETE_LOCATION_FAILURE,
                payload: { error: err }
            });
        }
    }
}

export {
    getLocation
}