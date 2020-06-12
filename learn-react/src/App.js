import React, {Component} from 'react';
import TaskContainer from './components/TaskContainer'

class App extends Component {
    render() {
        console.log('App Render');
        return (
            <div>
                <TaskContainer/>
            </div>
        );
    }
}

export default App;
