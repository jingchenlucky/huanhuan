import React from 'react';
import loginInfo from "./loginInfo";

import qs from 'query-string';

function Login(props) {
    return (
        <div>
            <h1>登陆页</h1>
            <div>仅做测试登录使用</div>
            <button onClick={() => {
                const query = qs.parse(props.location.search);
                if (query.returnurl) {
                    props.history.push(query.returnurl);
                }
                else {
                    props.history.push("/");
                }
                // if (props.location.state) {
                //     props.history.push(props.location.state);
                // } else {
                //     props.history.push("/");
                // }

            }}>登录按钮
            </button>
        </div>
    );
}

export default Login;
