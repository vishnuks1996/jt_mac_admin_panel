import { specialisationConstants } from "../actions/constants";

const initState = {
    specialisations: [],
    loading: false,
    error: null
};

export default (state = initState, action) => {
    switch(action.type) {
        case specialisationConstants.GET_SPECIALISATION_SUCCESS:
            state = {
                ...state,
                specialisations: action.payload.specialisations,
            }
            break;
        case specialisationConstants.GET_SPECIALISATION_FAILURE:
            state = {
                ...state,
               error: action.payload.error
            }
            break;               

    }
    return state;
}