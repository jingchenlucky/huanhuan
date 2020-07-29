import React, {Component} from 'react';

class CompA extends Component {
    state = {
        a: 123,
        b: 'abc'
    };

    render() {
        return (
            <div>
                <h1>{this.state.a}</h1>
                <CompB n={this.state.b}/>
                <button onClick={() => {
                    this.setState({
                        a: this.state.a + 1,
                        b: 'rrrr'
                    })
                }}>按钮
                </button>
            </div>
        )
    }
}

class CompC extends Component {
    render() {
        return (
            <div>
                <h1>CompC</h1>
            </div>
        )
    }
}

function CompB(props) {
    return (
        <div>
            <h1>CompB</h1>
            <h1>{props.a}</h1>
            <CompC/>
        </div>
    )
}

class App extends Component {
    render() {
        return (
            <div>
                <CompA/>
            </div>
        );
    }
}

export default App;
