import React, {Component} from 'react';
import Test from './Teat'

class App extends Component {
    state={
        number:1
    }
    render() {
        return (
            <div>
                <Test n={this.state.number}/>
                <button onClick={()=>{
                    this.setState({
                        number:this.state.number+1
                    })
                }}>父组件加1</button>
            </div>
        );
    }
}

export default App;
