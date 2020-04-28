import React, {Component} from 'react';
import NewLifeCycle from './NewLifeCycle'

class App extends Component {
    state = {
        number: 1
    }

    render() {
        return (
            <div>
                <NewLifeCycle n={this.state.number}/>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>父组件加1
                </button>
            </div>
        );
    }
}

export default App;
