import React, {Component} from 'react';
import FadeTransition from './components/common/FadeTransition';

export default class App extends Component {
    state = {
        show: true
    }

    render() {
        return (
            <div>
                <FadeTransition appear classNames ="abc" in={this.state.show} timeout={5000 }>
                    <h1>标题</h1>
                </FadeTransition>
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
