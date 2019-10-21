import React from 'react';

import s from './Header.module.css';

const Header = () => {
    return(
        <header className={s.header}>
            <img src="https://svn.apache.org/repos/infra/websites/production/ooo-site/content/images/aoo-logo-100x100.png" alt="logo"/>
        </header>
    )
};

export default Header;