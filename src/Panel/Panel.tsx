import React, { useContext } from 'react';
import { BluePostsContext } from '../Context/context';

import Toggle from '../Reusable/Toggle/Toggle';

import style from './Panel.module.css';

function Panel() {
    const [showBluePosts, setShowBluePosts] = useContext(BluePostsContext);
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