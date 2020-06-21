import React from 'react';
// import Moveable from './Moveable';
// import ShowMousePoint from './ShowMousePoint';
import MouseListener from './MouseListener';

const renderPoint = mouse => <>横左边：{mouse.x}纵坐标：{mouse.y}</>;
const renderDiv = mouse => <>
    <div style={{
        width: 100,
        height: 100,
        background: '#008c8c',
        position: 'absolute',
        left: mouse.x - 50,
        top: mouse.y - 50
    }}></div>
</>;

function Test(props) {
    return (
        <div>
            <MouseListener render={renderDiv}></MouseListener>
            <MouseListener render={renderPoint}></MouseListener>

        </div>
    );
}

export default Test;
