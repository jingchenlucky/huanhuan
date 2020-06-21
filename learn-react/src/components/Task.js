// import React, {PureComponent} from 'react';
// import PropTypes from 'prop-types';
// import './Task.css';
// // import {ObjectEqual} from '../utils/helper';
//
// class Task extends PureComponent {
//     static propTypes = {
//         name: PropTypes.string.isRequired,
//         isFinish: PropTypes.bool.isRequired
//     }
//
//     // shouldComponentUpdate(nextProps, nextState, nextContext) {
//     //     console.log('Task是否要重新渲染');
//     //     if (ObjectEqual(this.props, nextProps)) {
//     //         return false;
//     //
//     //     }
//     //     return true;
//     //
//     // }
//
//     render() {
//         console.log("Task Render");
//         return (
//             <li className={this.props.isFinish ? 'finish' : ''}>{this.props.name}</li>
//         );
//     }
// }
//
// export default Task;

import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

function Task(props) {
    console.log("Task Render");
    return (
        <li className={props.isFinish ? 'finish' : ''}>{props.name}</li>
    );
}

Task.propTypes = {
    name: PropTypes.string.isRequired,
    isFinish: PropTypes.bool.isRequired
}
export default React.memo(Task);

// function memo(FuncComp) {
//     return class Memo extends PureComponent {
//         render() {
//             return <FuncComp {...this.props}/>
//         }
//     }
// }
