import React from 'react';
import "./Modal.css";

function Modal(props) {
    if(!props.show){
        return null;
    }
    return (
        <div>
            <div className="modal">
                <p>加载中。。。。</p>
            </div>
        </div>
    );
}

export default Modal;
