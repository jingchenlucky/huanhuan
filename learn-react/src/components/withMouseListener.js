import React, {PureComponent} from 'react';
import './style.css';

function WithMouseListener(Comp) {
    return class MouseListener extends PureComponent {
        state = {
            x: 0,
            y: 0
        }
        divRef = React.createRef();
        handleMove = e => {
            const {left, top} = this.divRef.current.getBoundingClientRect();
            const x = e.pageX - left;
            const y = e.pageY - top;
            this.setState({
                x,
                y
            })
            console.log(x, y);
        }

        render() {
            return (
                <div className="point" onMouseMove={this.handleMove} ref={this.divRef}>
                    <Comp {...this.props} x={this.state.x} y={this.state.y}/>
                </div>
            );
        }
    }
}

export default WithMouseListener;
