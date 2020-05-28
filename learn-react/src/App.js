import React, {Component} from 'react';
import {A, B} from './components/Comps';

import withLog from './HOC/withLog';

// const LogA=withLog(A);
// const LogB=withLog(B);

import withLogin from './HOC/withLogin'
// const LoginA=withLogin(A);
// const LoginB=withLogin(B);

let AComp = withLogin(A);
AComp = withLog(AComp);
let BComp = withLogin(B);
BComp = withLog(BComp);

class App extends Component {

    render() {

        return (
            <div>
                {/*打印日志的高阶组件*/}
                {/*<LogA a={123}/>*/}
                {/*<LogB b={321}/>*/}

                {/*判断登陆的高阶组件*/}
                {/*<LoginA a={123} login/>*/}
                {/*<LoginB b={123} />*/}

                <AComp a={123} login/>
                <BComp b={321}/>
            </div>
        );
    }
}

export default App;
