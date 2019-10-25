import React from 'react';
import PreloaderSVG from '../../../assets/images/preloader.svg';

const Preloader = props => {
    return (
        <div>
            <img src={PreloaderSVG} alt="Preloader"/>
        </div>
    )
};

export default Preloader;