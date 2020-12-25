import React from 'react';
import style from './Layout.module.css';

/**
 * Line 25 uses a Destructured Parameter Type, 
 * where on the right side you see the object (in this case it is React.PropsWithChildren<{}>)
 * and on the left side you see the object's propreties listed in curly braces after a comma { children }
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
            <div>Header</div>
            <div className={style.Main}>
                <div className={style.Panel}>Panel</div>
                <div className={style.Content}>Content</div>
            </div>
        </div>
    );
}

export default Layout;
