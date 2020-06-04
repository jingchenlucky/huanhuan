import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css'

class Index extends Component {
    static propTypes = {
        total: PropTypes.number.isRequired,
        curIndex: PropTypes.number.isRequired,
        onChange: PropTypes.func.isRequired
    }

    render() {
        const spans = [];
        for (let i = 0; i < this.props.total; i++) {
            spans.push(<span
                key={i}
                className={i === this.props.curIndex ? 'active' : ''}
                onClick={() => {
                    this.props.onChange && this.props.onChange(i)
                }
                }
            ></span>)
        }
        return (
            <div className="dots">
                {spans}
            </div>
        );
    }
}

export default Index;
