import React, {Component} from 'react';
// import OldContext from './OldContext';
import NewContext from './NewContext';

class App extends Component {
    render() {
        return (
            <div>
                <NewContext/>
            </div>
        );
    }
}

export default App;
