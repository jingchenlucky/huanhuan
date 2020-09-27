import {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Prompt extends Component {
    static defaultProps = {
        when: false,//当when为true的时候，添加阻塞
        message: ''////添加阻塞时的消息
    }

    componentDidMount() {//组件刚绑定时，要不要添加阻塞
        this.handleBlock();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {//参数变化时  要不要添加阻塞
        this.handleBlock();
    }

    handleBlock = () => {
        if (this.props.when) {
            this.unBlock = this.props.history.block(this.props.message);
        } else {
            if (this.unBlock) {
                this.unBlock();
            }
        }
    }

    componentWillUnmount() {//组件卸载时，去掉阻塞
        if (this.unBlock) {
            this.unBlock();
        }
    }

    render() {
        return null;
    }
}

export default withRouter(Prompt);
