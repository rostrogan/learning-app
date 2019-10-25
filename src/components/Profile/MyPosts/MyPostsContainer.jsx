import React from 'react';
import {connect} from 'react-redux';
import {addPost, updateNewPost} from "../../../store/actions/profile.actions";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const MyPostsContainer = connect(mapStateToProps, {
    addPost,
    updateNewPost
})(MyPosts);

export default MyPostsContainer;