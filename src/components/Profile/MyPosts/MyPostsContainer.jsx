import React from 'react';
import { addPostCreator, updateNewPostCreator } from "../../../redux/profile.reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = props => {
    let state = props.store.getState();

    const addPost = () => {
        const action = addPostCreator();
        props.store.dispatch(action);
    };

    const onPostChange = (text) => {
        const action = updateNewPostCreator(text);
        props.store.dispatch(action);
    };

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )
};

export default MyPostsContainer;