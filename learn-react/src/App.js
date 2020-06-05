import React, {Component} from 'react';
import {A,} from './components/Comps';

import withLog from './HOC/withLog';

//高阶组件的嵌套使用
let AComp = withLog(A);

class App extends Component {
    myRef=React.createRef();

    componentDidMount() {
        console.log(this.myRef);
    }


    render() {

        return (
            <div>
                <AComp a={123} login ref={this.myRef}/>
            </div>
        );
    }
}

export default App;
