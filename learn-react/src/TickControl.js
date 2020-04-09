import React, {Component} from 'react';
import Tick from './Tick';

class TickControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOver: false
        }
        // this.handleOnOver=this.handleOnOver.bind(this);
    }

    handleOnOver = () =>
        this.setState({
            isOver: true
        })

    render() {
        let status = "正在倒计时";
        if (this.state.isOver) {
            status = "倒计时完成";
        }
        return (
            <>
                <Tick onOver={this.handleOnOver} number={10}/>
                <div>{status}</div>
            </>

        );
    }
}

export default TickControl;
