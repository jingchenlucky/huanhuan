import React, {Component} from 'react';

class Teat extends Component {
    state={
        n:this.props.n
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            n:nextProps.n
        })
    }

    render() {
        return (
            <div>
                <h1>数字{this.state.n}</h1>
                <button onClick={()=>{
                    this.setState({
                        n:this.state.n+1
                    })
                }}>加1</button>
            </div>
        );
    }
}

export default Teat;
