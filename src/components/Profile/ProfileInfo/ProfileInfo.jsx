import React from 'react';
import Preloader from "../../common/Preloader/Preloader";
import DefaultUserImage from '../../../assets/images/def-user-img.png';

import s from './ProfileInfo.module.css';

const ProfileInfo = props => {
    if (!props.profile) {
        return <Preloader/>
    } else if (props.profile) {
        return (
            <div>
                <div>
                    <img
                        src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                        alt="img"/>
                </div>
                <div className={s.descriptionBlock}>
                    <img src={DefaultUserImage} alt=""/>
                    <div>{props.profile.fullName}</div>
                </div>
            </div>
        )
    }
};

export default ProfileInfo;