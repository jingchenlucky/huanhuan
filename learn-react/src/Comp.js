import React from 'react';

function Comp(props) {
    console.log(props);
    return (
        <div className="comp">
            <h1>组件自身内容</h1>
            {props.children||<h1>默认值</h1>}
            {props.content2}
            {props.content2}
        </div>
    );
}

export default Comp;
