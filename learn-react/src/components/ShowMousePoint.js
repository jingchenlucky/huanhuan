import React, {PureComponent} from 'react';
import './style.css';

class Moveable extends PureComponent {
    state = {
        x: 0,
        y: 0
    }
    divRef = React.createRef();
    handleMove = e => {
        const {left, top} = this.divRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        this.setState({
            x,
            y
        })
        console.log(x, y);
    }

    render() {
        return (
            <div className="point" onMouseMove={this.handleMove} ref={this.divRef}>
                <p>鼠标横坐标：{this.state.x}鼠标纵坐标：{this.state.y}</p>
            </div>
        );
    }
}

export default Moveable;
