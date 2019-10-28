import * as types from '../actionTypes';
import {checkAuth} from "../../api/auth.api";

export const setAuthUserData = (userId, email, login) => ({
    type: types.SET_AUTH_USER_DATA,
    userData: {userId, email, login}
});

export const setAuthData = () => dispatch => {
    checkAuth().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, email, login));
        }
    });
};