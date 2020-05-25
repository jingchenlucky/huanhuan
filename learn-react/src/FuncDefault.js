import React from 'react';

function FuncDefault(props) {
    console.log(props);//已经完成了传入的值和默认值的混合
    return (
        <div>
            a:{props.a}
            b:{props.b}
            c:{props.c}
        </div>
    );
}
// 属性默认值
FuncDefault.defaultProps={
    a:1,
    b:2,
    c:3
}

export default FuncDefault;
