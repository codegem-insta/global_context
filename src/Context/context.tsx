import React, { useState } from 'react';

// Here we are creating a context to hold a `React State`. 
// If you check the type of a react state for a boolean state
// it is a pair of `boolean` and `React.Dispatch<React.SetStateAction<boolean>>`.
//
// We have to also add a default value of [true, value => { }].

const BluePostsContext = React.createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([true, value => { }]);

// This provider wraps a component and holds a state via useState.

export function bluePostsProvider<Props>(Component: React.ComponentType<Props>, defaultValue: boolean) {
    return (props: Props) => {
        const reactState = useState(defaultValue); // <--- the provider will store the state here

        return (
        <BluePostsContext.Provider value={reactState}>
            <Component {...props} />
        </BluePostsContext.Provider>
        );
    };
}

export default BluePostsContext;

