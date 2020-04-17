import React, {Component} from 'react';
import OldLifeCycle from './OldLifeCycle'

class App extends Component {
    state = {
        number: 1,
        show: true
    }

    render() {
        const comp = this.state.show ? <OldLifeCycle n={this.state.number}/> : null;
        return (
            <div>
                {comp}
                <button onClick={() => {
                    this.setState(state => ({
                        number: state.number + 1
                    }))
                }}>n加1
                </button>
                <button onClick={() => {
                    this.setState(state => ({
                        show: !this.state.show
                    }))
                }}>显示隐藏
                </button>
            </div>
        );
    }
}

export default App;
