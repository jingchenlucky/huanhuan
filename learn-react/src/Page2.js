import React, {Component} from 'react';
// import Prompt from './Prompt';
import {Prompt} from 'react-router-dom'

class Page2 extends Component {
    state = {
        value: ''
    }

    render() {
        return (
            <div>
                <Prompt when={this.state.value !== ''} message="跳转数据会丢失，确定要跳转页面嘛"/>
                <textarea type="text" value={this.state.value} onChange={e => {
                    this.setState({value: e.target.value})
                }}/>
            </div>
        );
    }
}

export default Page2;
