import React, {useState} from 'react';
import {CSSTransition, SwitchTransition} from "react-transition-group"
import './App.css';
import 'animate.css';

export default function App(props) {
    const [show1, setShow1] = useState(true);
    return (
        <div className="container">
            <SwitchTransition mode="out-in">
                <CSSTransition appear timeout={2000} key={show1} classNames={{
                    exit:'bounceOut',
                    enter:'bounceIn'
                }}>
                    <h1 className="animated fast">{show1 ? "title1" : "title2"}</h1>
                </CSSTransition>
            </SwitchTransition>
            <button onClick={() => setShow1(!show1)}>切换</button>
        </div>
    );
}
