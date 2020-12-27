import React from 'react';

import style from './Header.module.css';

function Header() {
    return (
        <div className={style.Header}>
            <div className={style.Title}>
                <img className={style.Logo} src={'./logo.png'} alt='Codegem logo'/> AwesomeApp
            </div>
        </div>
    );
}

export default Header;