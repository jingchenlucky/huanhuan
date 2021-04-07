import React, {Component} from 'react';

class Comp extends Component {
    constructor(props){
        super(props);
        this.state={
            n:0
        }
    }
    changeNumber=()=>{
        this.setState({
            n:this.state.n+1
        },()=>{
            //状态完成改变/重新渲染 之后触发，该回调运行在render之后
            console.log(this.state.n);
        })
    }
    render() {
        console.log("重新渲染");
        return (
            <div>
                <div>{this.state.n}</div>
                <button onClick={this.changeNumber}>+</button>

            </div>
        );
    }
}

export default Comp;