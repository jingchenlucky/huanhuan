import React, {Component} from 'react';

class A extends React.Component {
    render() {
        return (
            <h1 ref={this.props.abc}>组件A{this.props.words}</h1>
        )
    }
}

//传递函数组件A得到新的组件，类似于高阶组件
const NewA = React.forwardRef((props, ref) => {
    return <A {...props} abc={ref}></A>
});

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
