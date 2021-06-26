import { initialDataConstants } from "../actions/constants";

const initSate = {
    appointments: [],
    locations: [],
    mentorRequests: [],
    error: null,
    loading: ''
}

export default (state = initSate, action) => {
    switch (action.type) {
        case initialDataConstants.GET_ALL_INITIAL_DATA_REQUEST:
            state = {
                ...state,

            }
            break;
        case initialDataConstants.GET_ALL_INITIAL_DATA_SUCCESS:
            state = {
                ...state,
                appointments: action.payload.appointments,
                locations: action.payload.locations,
                mentorRequests: action.payload.mentorRequests
            }
            break;
        case initialDataConstants.GET_ALL_INITIAL_DATA_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
            }
            break;
        // case initialDataConstants.APPROVE_MENTOR_FAILURE:
        //     state = {
        //         ...state,
        //     }
        //     break;
    }

    return state;
}