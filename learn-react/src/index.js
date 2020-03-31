import React from 'react';
import ReactDOM from 'react-dom';
import src1 from './assets/1.jpg';
import src2 from './assets/2.jpg';
import src3 from './assets/3.jpg';
import './index.css';

const srcs = [src1, src2, src3];

let index = 2;

let timer;

const container = document.getElementById('root');

//渲染页面
function render() {
    ReactDOM.render(
        <img src={srcs[index]}/>,
        container
    );
}

// 根据index来切换图片
function start() {
    stop();
    timer = setInterval(() => {
        console.log(index);
        index = (index + 1) % 3;
        render();
    }, 1000)

}

function stop() {
    clearInterval(timer);
}

render();
start();
// 鼠标移入定时器停止，鼠标移除定时器开始
container.onmouseenter = function () {
    stop();
}
container.onmouseleave = function () {
    start();
}

