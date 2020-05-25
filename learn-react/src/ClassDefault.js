import React, {Component} from 'react';

class ClassDefault extends Component {
// // 类组件属性默认值 方式2
    static defaultProps = {
        a: 11,
        b: 22,
        c: 333
    }

    constructor(props) {
        super(props);
        console.log(props);//类组件在构造函数中完成   传入的值和默认值的混合
    }

    render() {
        return (
            <div>
                a:{this.props.a}
                b:{this.props.b}
                c:{this.props.c}
            </div>
        );
    }
}

// // 类组件属性默认值 方式1
// ClassDefault.defaultProps = {
//     a: 11,
//     b: 22,
//     c: 33
// }


export default ClassDefault;
