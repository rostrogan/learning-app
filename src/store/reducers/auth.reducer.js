import * as types from '../actionTypes';

const initialState = {
    isFetching: false,
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.userData,
                isAuth: true
            };

        default:
            return state;
    }
};

export default authReducer;