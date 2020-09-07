import React from 'react';
import rootConfig from './rootConfig';
import {Route} from 'react-router-dom';

function getRoutes(roots,basePath) {
    if (!Array.isArray(roots)) {
        return null;
    }
    let rs = roots.map((rt, i) => {
        const {children, component: Component,path, ...rest} = rt;
        let newPath=`${basePath}${path}`;
        newPath=newPath.replace(/\/\//g,"/");
        console.log(newPath);
        return (
            <Route key={i} path={newPath} {...rest} render={value => {
                return <Component {...value}>
                    {getRoutes(rt.children,newPath)}
                </Component>
            }}></Route>
        )
    })
    return rs;
}

function RootRouter(props) {
    return (
        <div>
            {getRoutes(rootConfig,'/')}
        </div>
    );
}

export default RootRouter;
