import React, {Component} from 'react';
import types from '../../../utils/commonTypes';
import PropTypes from 'prop-types';
import withDataGroup from '../hoc/withDataGroup'

class Option extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func,
        info: types.singleData.isRequired//每一个选项
    }

    render() {
        return (
            <option key={this.props.info.value} value={this.props.info.value}>
                {this.props.info.text}
            </option>
        )
    }
}

const OptGroup = withDataGroup(Option);

class Select extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func,
    }

    render() {
        return <select
            name={this.props.name}
            value={this.props.value}
            onChange={(e) => {
                this.props.onChange(e.target.value)
            }
            }>
            <OptGroup {...this.props}/>
        </select>
    }
}

export default Select;

// class Select extends Component {
//     /**
//      * 默认属性
//      * @param e
//      */
//     static defaultProps = {
//         datas: [],
//         value: ''
//     }
//
//     static propTypes = {
//         datas: types.groupDatas.isRequired,
//         name: PropTypes.string.isRequired,
//         value: PropTypes.string.isRequired,
//         onChange: PropTypes.func
//     }
//
//     handleChange = e => {
//         this.props.onChange && this.props.onChange(e.target.value, this.props.name, e)
//     }
//
//     /**
//      * 得到一组下拉框
//      */
//     getSelect() {
//         return this.props.datas.map(it => (
//                 <option key={it.value} value={it.value}>
//                     {it.text}
//                 </option>
//             )
//         )
//     }
//
//     render() {
//         const bs = this.getSelect();
//         return (
//             <select name={this.props.name} value={this.props.value} onChange={this.handleChange}>
//                 {bs}
//             </select>
//
//         );
//     }
// }
//
// export default Select;
