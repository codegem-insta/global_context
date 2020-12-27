import React from 'react';

// In this file we are going to create a context for 
// holding information about whether to show Blue Posts
// or not.

const BluePostsContext = React.createContext(true); // we are showing by default

function bluePostsHOC<T>(Component: React.ComponentClass<T>, value: boolean) {
    return (props: T) => (
        <BluePostsContext.Provider value={value}>
            <Component {...props} />
        </BluePostsContext.Provider>
    );
}

export default BluePostsContext;

