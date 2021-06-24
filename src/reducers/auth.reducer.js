import { authConstants } from "../actions/constants";

const initState = {
    token: null,
    user: {
        id: '',
        fullName: '',
        phoneNumber: '',
        email: '',
        Profile: []
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
};

export default (state = initState, action) => {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true,
                loading: true,
            }
            break;
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                authenticate: true,
                authenticating: false,
                loading: false,
            }
            break;
        case authConstants.LOGIN_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                authenticating: false,
                loading: false,
            }
            break;
        case authConstants.LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true,
                authenticating: true,
            }
            break;
        case authConstants.LOGOUT_SUCCESS:
            state = {
                ...initState
            }
            break;
        case authConstants.LOGOUT_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false
            }
            break;
    }

    return state;
}