import { slotConstants } from "../actions/constants";

const initState = {
    slots: [],
    locations: [],
    loading: false,
    error: null
};

export default (state = initState, action) => {
    switch (action.type) {
        case slotConstants.GET_SLOTS_SUCCESS:
            state = {
                ...state,
                slots: action.payload.slots,
                locations: action.payload.locations
            }
            break;
        case slotConstants.GET_SLOTS_FAILURE:
            state = {
                ...initState,
                error: action.payload.error
            }
            break;
        case slotConstants.DELETE_SLOT_FAILURE:
            state = {
                ...state,
                error: action.payload.error
            }
            break;


    }
    return state;
}