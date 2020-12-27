import React from 'react';

// In this file we are going to create a context for 
// holding information about whether to show Blue Posts
// or not.

const BluePostsContext = React.createContext(true); // we are showing by default

// Issue with this design: the data can only travel from this point down
// but it cannot go back up. So we need to add a state mechanism that can 
// be updated at any time.

export function bluePostsProvider<T = {}>(Component: React.ComponentType<T>, value: boolean) {
    return (props: T) => (
        <BluePostsContext.Provider value={value}>
            <Component {...props} />
        </BluePostsContext.Provider>
    );
}

export default BluePostsContext;

