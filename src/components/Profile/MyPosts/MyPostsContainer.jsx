import React from 'react';
import { addPostCreator, updateNewPostCreator } from "../../../redux/profile.reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = props => {
    const addPost = () => {
        const action = addPostCreator();
        props.dispatch(action);
    };

    const onPostChange = (text) => {
        const action = updateNewPostCreator(text);
        props.dispatch(action);
    };

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
        />
    )
};

export default MyPostsContainer;