import React from 'react';
import {NavLink} from "react-router-dom";
import Icon from "@material-ui/core/Icon";

import s from './Header.module.css';

const Header = props => {
    return (
        <header className={s.header}>
            <div className={'app-container'}>
                <div className={s.logo}>react-net-app</div>
                <div className={s.loginBlock}>
                    {
                        props.isAuth
                            ? props.login
                            : <NavLink to={'/login'}>Login</NavLink>
                    }
                </div>
            </div>
        </header>
    )
};

export default Header;