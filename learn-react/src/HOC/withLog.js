import React from 'react';

/**
 * 高阶组件
 * @param props
 * @returns {{new(): {}, prototype: {}}}
 */

export default function withLog(Comp) {
    // console.log(111111,props);
    class LogWrapper extends React.Component {

        componentDidMount() {
            console.log(`日志：组件${Comp.name}被创建了，创建时间${Date.now()}`);
        }

        componentWillUnmount() {
            console.log(`日志：组件${Comp.name}销毁了，销毁时间${Date.now()}`);
        }

        render() {
            //abc代表要转发的ref{current:null}
            const {abc, ...rest} = this.props;
            return <Comp {...rest} ref={abc}/>
        }
    }

    return React.forwardRef((props, ref) => {
        return <LogWrapper {...props} abc={ref}/>
    })

}

