import React from 'react';
import style from './Layout.module.css';

import Header from './Header/Header';

/**
 * Line 27 uses a Destructured Parameter Type where on the right side you 
 * see the object (in this case it is React.PropsWithChildren<{}>)
 * and on the left side you see the object's propreties listed 
 * in curly braces after a comma { children }
 * 
 * We could write this in a different way as well:
 * 
 *      function Layout(props: React.PropsWithChildren<{}>) {
 *          now you can use `props.children`
 *      }
 * 
 * But we can shorten this to:
 * 
 *      function Layout({ children }: React.PropsWithChildren<{}>)
 * 
 * in that case you access children right away without having to add `props.`
 * --------------
 * 
 * We use PropsWithChildren since we want our Layout component to wrap 
 * another component that will be the `main content`
 **/
function Layout({ children }: React.PropsWithChildren<{}>) {
    return (
        <div className={style.Layout}>
            <Header />
            <div className={style.Main}>
                <div className={style.Panel}>{
                    
                    filterChildren(children, (_, index) => index === 1) // get second child
                
                }</div>
                <div className={style.Content}>{
                
                    filterChildren(children, (_, index) => index === 0) // get first child
                
                }</div>
            </div>
        </div>
    );
}

// Utility method that loops through a list of children
// and returns only those which satisfy a condition
function filterChildren(children: React.ReactNode, condition: (child: React.ReactNode, i: number) => boolean) {
    return React.Children.map(children, (child, i) => {
        if (condition(child, i))
            return child;
    });
}

export default Layout;
