import React, {Component} from 'react';

class OldLifeCycle extends Component {
    constructor(props){
        super(props);
        this.state={
            n:0
        }
        console.log("constructor","一个新的组件诞生了");
    }
    componentWillMount() {
        console.log("componentWillMount","组件即将被挂载");
    }

    render() {
        console.log("render","渲染，返回的React元素会被挂载到虚拟Dom,通过ReactDom渲染为真实Dom");
        return (
            <div>
                <h1>旧版生命周期组件</h1>
                <h2>属性n:{this.props.n}</h2>
                <h2>状态n:{this.state.n}</h2>
            </div>
        );
    }
}

export default OldLifeCycle;
