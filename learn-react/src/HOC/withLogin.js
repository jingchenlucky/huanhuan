import React from 'react';

/**
 * 判断是否登陆
 * @param Comp
 * @returns {LoginWrapper}
 */
export default function withLogin(Comp) {
    return function LoginWrapper(props) {
        if (props.login) {
            return <Comp {...props}/>
        } else {
            return null;
        }
    }

}
