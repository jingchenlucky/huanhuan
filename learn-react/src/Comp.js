import React, {Component} from 'react';

class Comp extends Component {
    constructor(props){
        super(props);
        this.state={
            n:0
        }
    }
    changeNumber=()=>{
        this.setState(cur=>{
            //参数cur代表当前的状态
            //该函数的返回结果，会覆盖掉之前的状态
            //该函数是异步执行
            return {
                n:cur.n+1
            }
        },()=>{
            //所有状态全部更新完成，并且重新渲染后进行
            console.log("state更新完成",this.state.n);
        })
        this.setState(cur=>{//cur代表上一次改变之后的状态
            return {
                n:cur.n+1
            }
        })
        this.setState(cur=>{
            return {
                n:cur.n+1
            }
        })
        //这里可以是因为,第一个参数代表的函数会形成队列，上一个执行结果传给下一个
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


