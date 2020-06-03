import React, {Component} from 'react';

export default class Comp extends Component {
    state = {
        show: true
    }
    handleClick = () => {
        // this.txt.focus();
        this.setState({
            show: !this.state.show
        });
    }

    componentDidMount() {
        console.log("didMount", this.txt);
    }

    getRef = el => {
        this.txt = el;
        console.log('函数被调用了', el);
    }


    render() {
        return <div>
            {/*el是dom对象或是类实例*/}
            {this.state.show && <input ref={this.getRef} type="text"/>}
            <button onClick={this.handleClick}>隐藏显示</button>
        </div>
    }
}

