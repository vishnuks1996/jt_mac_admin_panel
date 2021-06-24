import { priceConstants } from "./constants";
import axios from "../helpers/axios";

const getPrice = () => {
    return async dispatch => {
        try {
            dispatch({ type: priceConstants.GET_PRICE_REQUEST });
        const res = await axios.get(`mentor/get_fees`, );
        if (res.status === 200) {

            const { fees } = res.data

            dispatch({
                type: priceConstants.GET_PRICE_SUCCESS,
                payload: { fees: fees }
            });
        }
        } catch (error) {
            dispatch({
                type: priceConstants.GET_PRICE_FAILURE,
                payload: { error: error }
            });
        }
    }
}

export const changeFee = (fees) => {
    return async dispatch => {
        try {
            dispatch({ type: priceConstants.CHANGE_PRICE_REQUEST });
            const res = await axios.put(`mentor/change_fees`, {
                ...fees
            });
            if (res.status === 200) {
                dispatch({
                    type: priceConstants.CHANGE_PRICE_SUCCESS,
                });
                dispatch(getPrice())
            } 
        } catch (error) {
            const err = error.response.data.message
            console.log(err)
            dispatch({
                type: priceConstants.CHANGE_PRICE_FAILURE,
                payload: { error: err }
            });
        }
    }
}

export {
    getPrice
}