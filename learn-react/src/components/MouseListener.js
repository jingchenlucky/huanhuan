import React, {PureComponent} from 'react';
import './style.css';

// import PropTypes from 'prop-types';

class MouseListener extends PureComponent {
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
                {this.props.render?this.props.render(this.state):'默认值'}
            </div>
        );
    }
}

export default MouseListener;
