import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src="https://cache.desktopnexus.com/thumbseg/2359/2359058-bigthumbnail.jpg" alt="photo"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;
