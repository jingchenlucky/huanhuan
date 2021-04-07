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
        })
        //执行了this.setState可能是异步的，不会立即执行render,而是在将来的某一时刻执行render
        console.log("state.n",this.state.n);//没有重新渲染，说明目前状态还没有改变
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