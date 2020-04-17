import React, {Component} from 'react';

class OldLifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            n: 0
        }
        console.log("constructor", "一个新的组件诞生了");
    }

    componentWillMount() {
        console.log("componentWillMount", "组件即将被挂载");
    }

    componentDidMount() {
        console.log("componentDidMount", "挂载完成 ");
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("componentWillReceiveProps", "接受到新的参数", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate", "是否应该重新渲染", this.props, nextProps, this.state, nextState)
        if (this.props.n === nextProps.n && this.state.n === nextState.n) {
            return false;
        }
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate", "组件即将被重新渲染");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate", "组件已完成重新渲染", prevProps, prevState);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount", "组件被销毁")
    }

    render() {
        console.log("render", "渲染，返回的React元素会被挂载到虚拟Dom,通过ReactDom渲染为真实Dom");
        return (
            <div>
                <h1>旧版生命周期组件</h1>
                <h2>属性n:{this.props.n}</h2>
                <h2>状态n:{this.state.n}</h2>
                <button onClick={() => {
                    this.setState({
                        n: this.state.n + 1
                    })
                }}>状态+1
                </button>
            </div>
        );
    }
}

export default OldLifeCycle;
