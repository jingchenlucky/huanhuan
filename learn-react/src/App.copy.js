import React, {Component} from 'react';
// import FuncDefault from './FuncDefault'
import ClassDefault from './ClassDefault'

class App extends Component {
    state = {}

    render() {
        return (
            <ClassDefault a={10}/>
        )

    }
}

export default App;
