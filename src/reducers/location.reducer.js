import { locationConstants } from "../actions/constants";

const initState = {
    locations: [],
    error: null
};

export default (state = initState, action) => {
    switch(action.type) {
        case locationConstants.GET_LOCATION_SUCCESS:
            state = {
                ...state,
                locations: action.payload.locations
            }
            break;
        case locationConstants.GET_LOCATION_FAILURE:
            state = {
                ...state,
               error: action.payload.error
            }
            break;               
    }
    return state;
}