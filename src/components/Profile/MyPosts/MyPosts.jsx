import React from 'react';

import Post from "./Post/Post";
import s from './MyPosts.module.css';

const MyPosts = props => {
    const postsElements = props.posts.map(p => <Post className={s.postItem} key={p.id} message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();

    const addPost = () => {
        newPostElement.current.value !== '' && props.addPost();
    };

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPost(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3>News feed</h3>
            <div>
                <div className={s.addPostArea}>
                    <input
                        type={'text'}
                        ref={newPostElement}
                        onChange={onPostChange}
                        value={props.newPostText}
                        placeholder={'Say something to world...'}
                    />
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