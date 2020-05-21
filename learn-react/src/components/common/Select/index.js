import React, {Component} from 'react';

class Select extends Component {

    handleChange = e => {
        this.props.onChange && this.props.onChange(e.target.value, this.props.name, e)
    }

    /**
     * 得到一组下拉框
     */
    getSelect() {
        return this.props.datas.map(it => (
                <option key={it.value} value={it.value}>
                    {it.text}
                </option>
            )
        )
    }

    render() {
        const bs = this.getSelect();
        return (
            <select name={this.props.name} value={this.props.value} onChange={this.handleChange}>
                {bs}
            </select>

        );
    }
}

export default Select;
