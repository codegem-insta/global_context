import * as React from 'react';

import styles from './Toggle.module.css';


function Toggle({ isON, onToggle, children }: React.PropsWithChildren<{ isON: boolean, onToggle?: () => void }>) {
    const toggleStyle = isON ? styles.ToggleON : styles.ToggleOFF;

    return (
        <div className={styles.Main}>
            <div className={`${styles.Toggle} ${toggleStyle}`} onClick={onToggle}>
                <div className={styles.Internal}>
                </div>
            </div>

            {children}
        </div>
    );
}

export default Toggle;