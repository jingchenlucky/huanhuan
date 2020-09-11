import React, {Component} from 'react';
import {withRouter, BrowserRouter as Router} from 'react-router-dom';

let prevLoaction, location, action, unBlock;

class _GuardHelper extends Component {
    componentDidMount() {
        unBlock = this.props.history.block((newlocation, ac) => {
            prevLoaction = this.props.location;//之前地址
            location = newlocation;//新地址
            action = ac;
            // console.log(this.props.location);
            // console.log(location);
            // console.log(action);
            return '23425';
        });
        //添加监听器
        this.unListen = this.props.history.listen((location, action) => {
            // console.log(location);
            // console.log("地址变化了");
            // console.log(action);
            this.props.onChange && this.props.onChange(this.props.location.pathname, location, action, this.unListen);
        })
    }
    componentWillUnmount() {
        unBlock();
        //卸载监听器
        this.unListen();
    }

    render() {
        return null;
    }
}

const GuardHelper = withRouter(_GuardHelper);

class RouteGuard extends Component {

    handleConfirm = (msg, callback) => {
        // console.log(msg);
        if (this.props.onBeforeChange) {
            this.props.onBeforeChange(prevLoaction, location, action, callback,unBlock);
        }else{
            callback(true);
        }
    }

    render() {
        return (
            <div>
                <Router getUserConfirmation={this.handleConfirm}>
                    <GuardHelper onChange={this.props.onChange}/>
                    {this.props.children}
                </Router>

            </div>
        );
    }
}

export default RouteGuard;
