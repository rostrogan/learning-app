import React from 'react';

import Post from "./Post/Post";

import s from './MyPosts.module.css';

const MyPosts = props => {
    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    const addPost = () => {
        const text = newPostElement.current.value;
        props.addPost(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={addPost}>Add</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;