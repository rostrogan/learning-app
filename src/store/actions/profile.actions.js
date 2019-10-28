import * as types from "../actionTypes";
import {profileApi} from "../../api/profile.api";

export const addPost = () => ({type: types.ADD_POST});
export const updateNewPost = (text) => ({type: types.UPDATE_NEW_POST_TEXT, newText: text});
export const setProfile = (currentProfile => ({type: types.SET_PROFILE, currentProfile}));

export const getCurrentProfile = (userId) => dispatch => {
    profileApi.getCurrentProfile(userId).then(data => {
        dispatch(setProfile(data));
    })
};