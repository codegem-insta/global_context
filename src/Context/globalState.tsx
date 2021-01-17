import React, { useState } from 'react';

const Pair = <L, R>(pair: [L, R]) => pair;

function createGlobalState<T>(defaultValue: T) {
    const GlobalContext = React.createContext<[T, React.Dispatch<React.SetStateAction<T>>]>([defaultValue, () => { }]);

    function globalProvider<Props>(Component: React.ComponentType<Props>) {
        return (props: Props) => {
            const reactState = useState(defaultValue); // <--- the provider will store the state here

            return (
            <GlobalContext.Provider value={reactState}>
                <Component {...props} />
            </GlobalContext.Provider>
            );
        };
    }

    return Pair([GlobalContext, globalProvider]);
}

export default createGlobalState;

