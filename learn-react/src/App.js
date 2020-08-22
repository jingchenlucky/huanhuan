import React from 'react';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';

const AWrapper = withRouter(A);
// function withRouter(Comp) {
//     return function routerWrapper(props) {
//         //获取上下文中的信息
//         return <Comp {...props} history={上下文中的history} />
//     }
// }
function News(props) {
    return (
        <>
            <div>新闻列表</div>
            {/*<A/>*/}
            <AWrapper/>
        </>
    )
}

function A(props) {
    console.log(props);
    return (<button onClick={() => {
        props.history.push("/")
    }}>
        点击返回
    </button>)
}

function Index() {
    return (
        <div>首页</div>
    )
}

function notFound() {
    return (
        <div>找不到页面。。</div>
    )
}

export default function App(props) {
    return (
        <Router>
            <Switch>
                <Route path="/news" component={News}/>
                <Route path="/" component={Index}/>
                <Route component={notFound}/>
            </Switch>
        </Router>
    );
}

