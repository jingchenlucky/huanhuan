import React from 'react';
import PropTypes from 'prop-types';
import ctx from './formContext';
import {Consumer} from './formContext';

FormButton.propTypes = {}

function FormButton(props) {
    return (
        <Consumer>
            {value => {
                return (
                    <div>
                        <button onClick={value.submit}>{props.children}</button>
                    </div>
                )
            }}
        </Consumer>

    );
}

export default FormButton;
