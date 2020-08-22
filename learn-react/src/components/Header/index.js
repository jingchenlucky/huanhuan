import React, {Component} from 'react';
import './index.css';

export default class Header extends Component {
    render() {
        return (
            <div className="Header-content">
                <div className="left">
                    学生管理系统
                </div>
                <div className="right">
                    用户名
                    <button>退出</button>
                </div>
            </div>
        );
    }
}
