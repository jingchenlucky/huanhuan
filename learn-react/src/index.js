import React from 'react';
import ReactDOM from 'react-dom';
import Pager from './components/Pager';

ReactDOM.render(<Pager
    current={12}
    total={100}
    limit={9}
    panelNumber={5}
/>, document.getElementById('root'))

