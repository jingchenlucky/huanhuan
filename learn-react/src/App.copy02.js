import React, {Component} from 'react';
import FadeTransition from './components/common/FadeTransition';
import {SwitchTransition} from "react-transition-group";

export default class App extends Component {
    state = {
        show: true
    }

    render() {
        return (
            <div>
                <SwitchTransition>
                    <FadeTransition appear classNames="abc" key={this.state.show} timeout={500}>
                        <h1>{this.state.show ? "显示" : "隐藏"}</h1>
                    </FadeTransition>
                </SwitchTransition>

                <button onClick={() => {
                    this.setState({
                        show: !this.state.show
                    })

                }}>
                    切换状态按钮
                </button>
            </div>
        );
    }
}
