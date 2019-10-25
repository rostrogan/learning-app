import * as types from '../actionTypes';

export const setAuthUserData = (userId, email, login) => ({type: types.SET_AUTH_USER_DATA, userData: {userId, email, login}});