import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post currentLike = '45'/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
};

export default MyPosts;
