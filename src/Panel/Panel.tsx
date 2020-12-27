import React, { useState } from 'react';

import Toggle from '../Reusable/Toggle/Toggle';

import style from './Panel.module.css';

function Panel() {
    const [showRedPosts, setShowRedPosts] = useState(true);
    const onToggle = () => setShowRedPosts(oldValue => !oldValue);

    return (
        <div className={style.Panel}>
            <Toggle isON={showRedPosts} onToggle={onToggle}>Show blue posts</Toggle>

           <div>Settings</div>

           <div>Other filters</div>
        </div>
    );
}


export default Panel;