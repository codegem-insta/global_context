import * as React from 'react';

import styles from './Toggle.module.css';


function Toggle({ isON, onToggle, children }: React.PropsWithChildren<{ isON: boolean, onToggle?: () => void }>) {
    return (
        <div className={styles.Main}>
            <div className={isON ? styles.Toggle : styles.ToggleOFF} onClick={onToggle}>
                <div className={styles.Internal}>
                </div>
            </div>
            
            {children}
        </div>
    );
}

export default Toggle;