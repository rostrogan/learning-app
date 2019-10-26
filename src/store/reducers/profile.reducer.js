import * as types from '../actionTypes';
import nanoid from 'nanoid';

const initialState = {
    posts: [
        {id: nanoid(5), message: 'Hi, how are you?', likesCount: 10},
        {id: nanoid(5), message: 'Its my first post', likesCount: 15}
    ],
    newPostText: '',
    currentProfile: {}
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [{id: 555, message: state.newPostText, likesCount: 0}, ...state.posts]
            };

        case types.UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return {
                ...state,
                newPostText: action.newText
            };

        case types.SET_PROFILE:
            return {
                ...state,
                currentProfile: action.currentProfile
            };

        default:
            return state;
    }
};

export default profileReducer;