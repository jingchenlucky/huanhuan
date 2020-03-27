import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"


const url="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585332563874&di=89d4759d2d97a5e2eeeaa04ed40a0ab0&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F16%2F12%2F01300535031999137270128786964.jpg"
const cls="image";
const div1=(
    <div>
        <img src={url} className={cls} style={{marginLeft:'30px',width:'200px'}}/>
    </div>
)
ReactDOM.render(
    div1,
    document.getElementById('root')
);
