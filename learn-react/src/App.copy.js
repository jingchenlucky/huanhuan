import React, {Component} from 'react';

function A(props, ref) {
    console.log(props, ref);
    return <h1 ref={ref}>组件A{props.words}</h1>
}

//传递函数组件A得到新的组件，类似于高阶组件
const NewA = React.forwardRef(A);

class App extends Component {
    ARef = React.createRef();//ref创建成对象

    componentDidMount() {
        console.log(this.ARef);
    }

    render() {
        return (
            <div>
                <NewA ref={this.ARef} words="3324433"/>
            </div>
        );
    }
}

export default App;
