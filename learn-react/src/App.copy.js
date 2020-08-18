import React, {useState} from 'react';
import {CSSTransition, SwitchTransition} from "react-transition-group"
import './App.css';

export default function App(props) {
    const [show1, setShow1] = useState(true);
    return (
        <div>
            <SwitchTransition mode="out-in">
                <CSSTransition appear timeout={2000} key={show1}>
                    <h1>{show1 ? "title1" : "title2"}</h1>
                </CSSTransition>
            </SwitchTransition>
            <button onClick={() => setShow1(!show1)}>切换</button>
        </div>
    );
}
