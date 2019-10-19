import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://cache.desktopnexus.com/thumbseg/2359/2359058-bigthumbnail.jpg" alt="photo"/>
            </div>
            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    );
};

export default ProfileInfo;
