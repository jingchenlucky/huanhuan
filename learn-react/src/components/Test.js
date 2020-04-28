import React, {Component} from 'react';
import Modal from './common/Modal';

class Test extends Component {
    state = {
        showModal: false
    }
    showModal=()=>{
        this.setState({showModal: true})
    }
    hideModal=()=>{
        this.setState({showModal: false})
    }

    render() {
        return (
            <div>
                <img
                    src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3252521864,872614242&fm=26&gp=0.jpg"
                    alt=""/>
                {this.state.showModal ?
                    (<Modal bg="rgba(200,200,100,0.5)" onClose={this.hideModal}>
                        <h1>21324453534535254</h1>
                        <button onClick={this.hideModal}>关闭梦层
                        </button>
                    </Modal>) : null}
                <button onClick={this.showModal}>显示梦层
                </button>
            </div>
        );
    }
}

export default Test;

