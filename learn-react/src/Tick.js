import React, {Component} from 'react';

class Tick extends Component {
    constructor(props){
        super(props);
        this.state={
            number:props.number
        }
        console.log(props);
        const timer=setInterval(()=>{
            this.setState({
                number:this.state.number-1
            })
            if(this.state.number===0){
                clearInterval(timer);
                //倒计时结束
                this.props.onOver&&this.props.onOver();
            }
        },1000)
    }

    render() {
        return (
            <div>
                倒计时:{this.state.number}
            </div>
        );
    }
}

export default Tick;
