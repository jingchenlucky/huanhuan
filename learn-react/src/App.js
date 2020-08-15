import React, {useState} from 'react';
import {Transition} from 'react-transition-group';
import './App.css';

const duration = 2000;

// const defaultStyle = {
//     transition: `opacity ${duration}ms ease-in-out`,
//     opacity: 0,
// }
//
// const transitionStyles = {
//     entering: {opacity: 1},
//     entered: {opacity: 1},
//     exiting: {opacity: 0},
//     exited: {opacity: 0},
// };

export default function App() {
    const [inProp, setInProp] = useState(false);
    return (
        <div>
            <Transition in={inProp} timeout={duration} onEnter={()=>{console.log("Enter之前");}} >
            {state => {
            console.log(state);
            return <div className={state}>
            I'm a fade Transition!
            </div>
        }}
        </Transition>
    <button onClick={() => setInProp(!inProp)}>
        Click to Enter
    </button>
</div>
)
    ;
}
