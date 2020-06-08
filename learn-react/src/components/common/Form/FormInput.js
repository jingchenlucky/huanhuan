import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ctx from './formContext'


class FormInput extends Component {
    static defaultProps = {
        type: 'text'
    }
    static  propTypes = {
        name: PropTypes.string.isRequired,
        type: PropTypes.string,
    }
    static contextType = ctx;

    render() {
        return (
            <input
                value={this.context.formData[this.props.name]||''}
                onChange={e => {
                    this.context.changeFormData(this.props.name, e.target.value)
                }}
                type={this.props.type}
            />
        );
    }
}

export default FormInput;
