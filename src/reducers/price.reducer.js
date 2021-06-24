import { priceConstants } from "../actions/constants";

const initState = {
    fees: [],
    error: null
};

export default (state = initState, action) => {
    switch(action.type) {
        case priceConstants.GET_PRICE_SUCCESS:
            state = {
                ...state,
                fees: action.payload.fees,
            }
            break;
        case priceConstants.GET_PRICE_FAILURE:
            state = {
                ...state,
               error: action.payload.error
            }
            break;               

    }
    return state;
}