import React, {Component} from 'react';
import './Ball.css'

class Ball extends Component {
    constructor(props) {
        super(props);
        //横纵坐标、背景颜色不需要改变 从父组件传递过来
        //横纵速度在运动换方向的时候会改变，从父组件传递初识速度
        this.state = {
            left: props.left || 0,
            top: props.top || 0,
            xSpeed: props.xSpeed,
            ySpeed: props.ySpeed
        }
        const duration = 16;
        setInterval(() => {
            const xDis = this.state.xSpeed * duration / 1000;
            const yDis = this.state.ySpeed * duration / 1000;
            //根据速度，改变left和top值
            let newLeft = this.state.left + xDis;
            let newTop = this.state.top + yDis;
            if (newLeft <= 0) {
                newLeft = 0;
                this.setState({
                    xSpeed: -this.state.xSpeed //横坐标反向
                })
            }
            else if (newLeft >= document.documentElement.clientWidth - 100) {
                newLeft = document.documentElement.clientWidth - 100;
                this.setState({
                    xSpeed: -this.state.xSpeed //横坐标反向
                })
            }

            if (newTop <= 0) {
                newTop = 0;
                this.setState({
                    ySpeed: -this.state.ySpeed //纵坐标反向
                })
            }
            else if (newTop >= document.documentElement.clientHeight - 100) {
                newTop = document.documentElement.clientHeight - 100;
                this.setState({
                    ySpeed: -this.state.ySpeed //纵坐标反向
                })
            }

            this.setState({
                left: newLeft,
                top: newTop
            });
        }, duration);
    }

    render() {
        return (
            <div className="ball" style={{
                left: this.state.left + 'px',
                top: this.state.top + 'px',
                background: this.props.bg || '#f40'
            }}>

            </div>
        );
    }
}

export default Ball;
