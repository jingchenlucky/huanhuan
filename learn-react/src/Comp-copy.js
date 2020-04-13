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
            //状态完成改变之后触发，该回调运行在render之后
            console.log(this.state.n);
        })
        console.log("state。n",this.state.n);//没有重新渲染，说明目前状态还没有改变
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
