import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class RouteGuard extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default withRouter(RouteGuard);
