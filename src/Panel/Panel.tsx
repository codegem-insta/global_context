import React, { useState } from 'react';

import Toggle from '../Reusable/Toggle/Toggle';

import style from './Panel.module.css';

function Panel() {
    const [showBluePosts, setShowBluePosts] = useState(true);
    const onToggle = () => setShowBluePosts(oldValue => !oldValue);

    return (
        <div className={style.Panel}>
            <Toggle isON={showBluePosts} onToggle={onToggle}>Show blue posts</Toggle>

           <div>Settings</div>

           <div>Other filters</div>
        </div>
    );
}


export default Panel;