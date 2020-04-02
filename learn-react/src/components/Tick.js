import React, {Component} from 'react';
// 倒计时组件
class Tick extends Component {
    constructor(props){
        super(props);
        // 初始化状态
        this.state={
            left:this.props.number
        }
        this.timer=setInterval(()=>{
            // 重新设置状态，出发重新渲染
            this.setState({//Object.assign来替换之间对象
                left:this.state.left-1
            });
            if(this.state.left===0){
                //停止计时器
                clearInterval(this.timer);
            }
        },1000)

    }
    render() {
        return (
            <div>
                时间倒计时{this.state.left}
            </div>
        );
    }
}

export default Tick;
