import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {

    let posts = props.postData.map(p => <Post id={p.id} currentLike={p.currentLike} message={p.message}/>);
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
};

export default MyPosts;
