import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class RouteGuard extends Component {
    //添加监听器
    componentDidMount() {
        console.log(this.props);
        this.unListen = this.props.history.listen((location, action) => {
            console.log(location);
            console.log("地址变化了");
            console.log(action);
            this.props.onChange && this.props.onChange(this.props.location.pathname, location, action, this.unListen);
        })
        //设置阻塞
        this.props.history.block("真到要跳转页面嘛？");
    }

    //卸载监听器
    componentWillUnmount() {
        this.unListen();
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default withRouter(RouteGuard);
