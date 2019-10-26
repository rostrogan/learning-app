import React from 'react'
import {NavLink} from "react-router-dom";

import s from './Navbar.module.css';

const Navbar = props => {
    const navLinks = props.navLinks.map(n => {
        return (
            <div className={s.item}
                 key={n.id}
            >
                <NavLink to={n.url}
                         activeClassName={s.activeLink}
                >{n.title}</NavLink>
            </div>
        );
    });
    return (
        <nav className={s.nav}>
            {navLinks}
        </nav>
    )
};

export default Navbar;