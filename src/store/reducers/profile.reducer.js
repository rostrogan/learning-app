import * as types from '../actionTypes';

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: 'Its my first post', likesCount: 15}
    ],
    newPostText: 'Enter post text',
    currentProfile: {}
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 555, message: state.newPostText, likesCount: 0}]
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