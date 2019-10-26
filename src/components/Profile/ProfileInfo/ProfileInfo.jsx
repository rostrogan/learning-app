import React from 'react';
import Preloader from "../../common/Preloader/Preloader";
import DefaultUserImage from '../../../assets/images/def-user-img.png';

import s from './ProfileInfo.module.css';

const ProfileInfo = props => {
    if (!props.profile) {
        return <Preloader/>
    } else if (props.profile) {
        return (
            <div className={s.profileInfoContainer}>
                <div className={s.wallpaperWrapper}>
                    <img
                        src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                        alt="img"/>
                </div>
                <div className={s.descriptionBlock}>
                    <img src={DefaultUserImage} alt=""/>
                    <div className={s.textInfo}>
                        <div className={s.personalInfo}>
                            <div className={s.textInfoFullName}>{props.profile.fullName}</div>
                            <div className={s.textInfoAboutMe}>{props.profile.aboutMe}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default ProfileInfo;