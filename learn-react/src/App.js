import React, {Component} from 'react';
import Test from './components/Test';

class App extends Component {
    render() {
        console.log('App Render');
        return (
            <div>
                <Test/>
            </div>
        );
    }
}

export default App;
