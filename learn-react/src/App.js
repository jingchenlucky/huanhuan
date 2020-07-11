import React from 'react';

var prev;

function App(props) {
    return (
        <div onClick={(e) => {
            console.log(e === prev);
            console.log("React:Div被点击了")
        }}>
            <button onClick={(e) => {
                prev = e;
                console.log("react:按钮被点击了");
                // e.stopPropagation();
                console.log("React中的事件参数e是一个合成的事件对象", e);
                console.log("e.nativeEvent可以拿到真实的事件对象", e.nativeEvent);
            }}>按钮
            </button>
        </div>
    );
}

export default App;
document.querySelector('#root').onclick = function (e) {
    console.log("真实的dom事件，id为root的div被点击了");
    // e.stopPropagation();
}


