import React, {Component} from 'react';
import PropTypes from "prop-types";

const ctx1 = React.createContext({//传参设置上下文默认值
    a: 0,
    b: 'abc'
});
const ctx2 = React.createContext({});

// console.log(ctx);
function ChildA() {
    return (
        <ctx2.Provider value={{a: 888, b: 'eeee'}}>
            <div>
                <h1>ChildA</h1>
                <h2>
                    <ctx1.Consumer>
                        {value => <>{value.a}{value.b}</>}
                    </ctx1.Consumer>
                </h2>
                <ChildB/>
            </div>
        </ctx2.Provider>
    )

}


class ChildB extends React.Component {

    render() {
        return (
            <ctx1.Consumer>
                {value => (
                    <>
                        <p>
                            ChildB文本 a:{value.a} b:{value.b}
                            <button onClick={() => {
                                value.onChangeB(value.a + 2)
                            }}>子组件childB按钮，a+2
                            </button>
                        </p>
                        <p>
                            <ctx2.Consumer>
                                {value => (
                                    <>
                                        来自ctx2的数据, a:{value.a}b:{value.b}
                                    </>

                                )}
                            </ctx2.Consumer>
                        </p>
                    </>

                )}
            </ctx1.Consumer>
        )
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
        const Provider = ctx1.Provider;

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
