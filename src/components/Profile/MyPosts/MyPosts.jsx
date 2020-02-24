import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    
    let posts = props.postData.map(p => <Post currentLike={p.currentLike} message={p.message}/>);

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
               {posts}
            </div>
        </div>
    )
};

export default MyPosts;
