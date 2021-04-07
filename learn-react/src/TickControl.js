import React, { Component } from 'react';
import Tick from './Tick';

class TickControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOver: false,
    };
    ////解决this指向问题方法2
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this);
    console.log('点击了');
  }
//解决this指向问题方法1
  handleOnOver = () =>
    this.setState({
      isOver: true,
    });

  render() {
    let status = '正在倒计时';
    if (this.state.isOver) {
      status = '倒计时完成';
    }
    return (
      <>
        <Tick onOver={this.handleOnOver} number={10} onClick={this.handleClick}/>
        <div>{status}</div>
      </>
    );
  }
}

export default TickControl;
