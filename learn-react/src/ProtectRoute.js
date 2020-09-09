import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import loginInfo from './loginInfo';

export default function ProtectRoute({component: Component, ...rest}) {

    return (

        <Route {...rest} render={value => {
            console.log(value);
            if (loginInfo.isLogin) {//如已经登录，返回私人页面组件
                return <Component/>
            } else {
                return <Redirect to={{//如果没登录，跳转到登录页面
                    pathname: "/login",
                    search: "?returnurl=" + value.location.pathname
                }}/>
                // return <Redirect to={{
                //     pathname: "/login",
                //     state: value.location.pathname
                // }} />
            }
        }}>

        </Route>
    );
}
