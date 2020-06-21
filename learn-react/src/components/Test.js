import React from 'react';
// import Moveable from './Moveable';
// import ShowMousePoint from './ShowMousePoint';
import withMouseListener from './withMouseListener';

function Point(props) {
    return <>横坐标x:{props.x}纵坐标y:{props.y}</>
}

function MoveDiv(props) {
    return <div style={{
        width: 100,
        height: 100,
        background: '#008c8c',
        position: 'absolute',
        left: props.x - 50,
        top: props.y - 50
    }}></div>

}

const MousePoint = withMouseListener(Point);
const MouseDiv = withMouseListener(MoveDiv);


function Test(props) {
    return (
        <div>
            <MouseDiv/>
            <MousePoint/>

        </div>
    );
}

export default Test;
