import React from 'react';

import s from './ProfileInfo.module.css';

const ProfileInfo = props => {
    return (
        <div>
            <div>
                <img
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                    alt="img"/>
            </div>
            <div className={s.descriptionBlock}>ava + descr</div>
        </div>
    )
};

export default ProfileInfo;