import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://i.pinimg.com/736x/22/f0/65/22f065f85d994561c85443ac9eb0587e--police-sunglasses-sunglasses-women.jpg'/>
            post 1
            <div>
                <span>{props.message}</span> {props.currentLike}
            </div>
        </div>
    )
};

export default Post;
