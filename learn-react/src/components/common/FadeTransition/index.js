import React from 'react';
import {CSSTransition} from "react-transition-group";
import './index.css';

FadeTransition.defaultProps = {
    timeout: 2000
}

export default function FadeTransition(props) {
    const addTransition = (node) => {
        node.style.transition = `opacity+${props.timeout}ms`
    }
    const removeTransition = node => {
        node.style.transition = ''
    }
    return (
        <CSSTransition {...props} classNames="fade"
                       onEnter={addTransition}
                       onEntered={(node, isAppearing) => {
                           removeTransition(node);
                           props.onEntered && props.onEntered(node, isAppearing)
                       }}
                       onExit={addTransition}
                       onExited={(node, isAppearing) => {
                           removeTransition(node);
                           props.onExited && props.onExited(node)
                       }}
        ></CSSTransition>
    );
}
