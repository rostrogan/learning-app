import React from 'react';
import {NavLink} from "react-router-dom";

import s from './Header.module.css';

const Header = props => {
    return(
        <header className={s.header}>
            <img src="https://svn.apache.org/repos/infra/websites/production/ooo-site/content/images/aoo-logo-100x100.png" alt="logo"/>
            <div className={s.loginBlock}>
                {
                    props.isAuth
                        ? props.login
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
};

export default Header;