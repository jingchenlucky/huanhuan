import React, {Component} from 'react';
import PropTypes from 'prop-types';

const types = {
    a: PropTypes.number,
    b: PropTypes.string.isRequired,
    onChangeA: PropTypes.func
}

function ChildA(props, context) {
    return <div>
        <h1>ChildA文本</h1>
        <h2>a:{context.a},a:{context.b}</h2>
        <ChildB/>
    </div>
}

/**
 *函数组件中 声明需要使用哪些上下文中的数据
 * @returns {*}
 */
ChildA.contextTypes = types;


class ChildB extends React.Component {
    // 在ChildB中使用上下文数据
    /**
     *类组件中 声明需要使用哪些上下文中的数据
     * @returns {*}
     */
    static contextTypes = {
        a: types.a,
        onChangeA: PropTypes.func
    }

    // constructor(props, context) {
    //     super(props);
    //     console.log("ChildB获取到的上下文数据", context);
    // }

    render() {
        return <p>
            ChildB文本 a:{this.context.a}
            <button onClick={() => {
                this.context.onChangeA(this.context.a + 2)
            }}>B组件让a+2
            </button>
        </p>
    }
}

class OldContext extends Component {
    static childContextTypes = types;
    state = {
        a: 123,
        b: "字符串String"
    }

    // 得到上下文中的数据
    getChildContext() {
        console.log("(重新1)获取上下文中的数据");
        return {
            a: this.state.a,
            b: this.state.b,
            onChangeA: (newA) => {
                this.setState({
                    a: newA
                })
            }
        }
    }

    render() {
        return (
            <div>
                <ChildA/>
                <button onClick={() => {
                    this.setState({a: this.state.a + 1})
                }}>按钮a+1
                </button>
            </div>
        );
    }
}

export default OldContext;
