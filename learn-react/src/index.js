import React from 'react';
import ReactDOM from 'react-dom';
import Comp from './Comp'

// ReactDOM.render(<Comp html={<p>123456</p>}/>, document.getElementById('root'))
ReactDOM.render(
    <Comp content2={<h2>第二组元素内容</h2>} content3={<h2>第3组元素内容</h2>}>
        <p>123456789</p>
    </Comp>,
    document.getElementById('root'))

