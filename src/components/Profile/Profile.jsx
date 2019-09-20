import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => (
  <div>
    <div>
      <img src="https://cache.desktopnexus.com/thumbseg/2359/2359058-bigthumbnail.jpg" alt="photo" />
    </div>
    <div>ava + description</div>
      <MyPosts/>
  </div>
);

export default Profile;
