import React from 'react';
import style from './Layout.module.css';

import Header from './Header/Header';
import Panel from '../Panel/Panel';

function Layout({ children }: React.PropsWithChildren<{}>) {
    return (
        <div className={style.Layout}>
            <Header />
            <div className={style.Main}>
                <div className={style.Panel}>
                    
                    <Panel />

                </div>
                <div className={style.Content}>
                    
                    {children}
                
                </div>
            </div>
        </div>
    );
}

export default Layout;
