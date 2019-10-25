import * as types from "../actionTypes";

export const addPost = () => ({type: types.ADD_POST});
export const updateNewPost = (text) => ({type: types.UPDATE_NEW_POST_TEXT, newText: text});
export const setProfile = (currentProfile => ({type: types.SET_PROFILE, currentProfile}));