import React, {Component} from 'react';
import {Provider} from './formContext';
import FormInput from "./FormInput";
import FormButton from "./FormButton";

class Form extends Component {
    state = {
        formData: {},
        changeFormData: (name, value) => {
            this.setState({
                formData: {
                    ...this.state.formData,//取出所有的值。用新的值覆盖掉
                    [name]: value
                }
            })
        },
        submit: () => {
            this.props.onSubmit && this.props.onSubmit(this.state.formData);
        }
    }

    render() {
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        );
    }
}


export default Form;
Form.Input = FormInput;
Form.Button = FormButton;
