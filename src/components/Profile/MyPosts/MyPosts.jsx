import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post currentLike='45' message="hello"/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
};

export default MyPosts;
