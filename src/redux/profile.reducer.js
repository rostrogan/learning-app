const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: 'Its my first post', likesCount: 15}
    ],
    newPostText: 'Enter post text'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 555, message: state.newPostText, likesCount: 0}]
            };

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return {
                ...state,
                newPostText: action.newText
            };

        default:
            return state;
    }
};

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;