import React, {Component} from 'react';
import PropTypes from "prop-types";

const ctx = React.createContext({//传参设置上下文默认值
    a: 0,
    b: 'abc'
});

// console.log(ctx);
function ChildA() {
    return <div>
        <h1>ChildA</h1>
        <h2>
            <ctx.Consumer>
                {value => <>{value.a}{value.b}</>}
            </ctx.Consumer>
        </h2>
        <ChildB/>
    </div>
}


class ChildB extends React.Component {
    static contextType = ctx;

    render() {
        return <p>
            ChildB文本 a:{this.context.a} b:{this.context.b}
            <button onClick={() => {
                this.context.onChangeB(this.context.a + 2)
            }}>子组件childB按钮，a+2
            </button>
        </p>
    }
}

class NewContext extends Component {
    state = {
        a: 123,
        b: 'aaa',
        onChangeB: (newA) => {
            this.setState({
                a: newA
            })
        }
    }

    render() {
        const Provider = ctx.Provider;

        return (
            //value属性更改上下文数据
            <Provider value={this.state}>
                <div>
                    <ChildA/>
                    <button onClick={() => {
                        this.setState({a: this.state.a + 1})
                    }}>父组件按钮按钮,a+1
                    </button>
                </div>
            </Provider>

        );
    }
}

export default NewContext;
