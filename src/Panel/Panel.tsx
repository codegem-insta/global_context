import React, { useState } from 'react';

import Toggle from '../Reusable/Toggle/Toggle';

import style from './Panel.module.css';

function Panel() {
    const [showRedPosts, setShowRedPosts] = useState(false);
    const onToggle = () => setShowRedPosts(oldValue => !oldValue);

    return (
        <div>
            <Toggle isON={showRedPosts} onToggle={onToggle}>Show Red</Toggle>
        </div>
    );
}


export default Panel;