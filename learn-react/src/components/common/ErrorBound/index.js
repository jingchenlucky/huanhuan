import React, {PureComponent} from 'react';

class ErrorBound extends PureComponent {
    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        console.log("发生错误了", error);
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        // this.setState({
        //     hasError: true
        // })
        // console.log("1111111111111",error);
        // console.log("2222222222222",info);
        console.log("记录错误信息")
    }


    render() {
        // setTimeout(()=>{throw new Error("fgfdhgfj")},1000);
        if (this.state.hasError) {
            return <h1>发生错误了</h1>
        }
        return this.props.children
    }
}

export default ErrorBound;
