import React, {Component} from 'react';

class Page2 extends Component {
    state = {
        value: ''
    }
    handleBlock = (value) => {
        if (value) {
            this.unBlock = this.props.history.block("挑传页面会导致页面无法保留，确认要跳转页面嘛");
        } else {
            if (this.unBlock) {
                this.unBlock();
            }
        }
    }

    componentWillUnmount() {
        if (this.unBlock) {
            this.unBlock();
        }
    }

    render() {
        return (
            <div>
                <textarea type="text" value={this.state.value} onChange={e => {
                    this.setState({value: e.target.value})
                    this.handleBlock(e.target.value);
                }}/>
            </div>
        );
    }
}

export default Page2;
