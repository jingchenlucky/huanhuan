import React, {Component} from 'react';
import types from '../../../utils/commonTypes';
import PropTypes from 'prop-types';
import withDataGroup from '../hoc/withDataGroup'

class RadioBox extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,//选中项内容
        onChange: PropTypes.func,
        info: types.singleData.isRequired//每一个选项
    }
    handleChange = e => {
        this.props.onChange && this.props.onChange(e.target.value)
    }

    render() {
        return <label>
            <input
                type="radio"
                name={this.props.name}
                value={this.props.info.value}
                checked={this.props.value === this.props.info.value}
                onChange={this.handleChange}
            />{this.props.info.text}
        </label>
    }
}

export default withDataGroup(RadioBox);

// class RadioBoxGroup extends Component {
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
//         value: tPropTypes.string.isRequired,
//         onChange: PropTypes.func
//     }
//
//     handleChange = e => {
//         this.props.onChange && this.props.onChange(e.target.value, this.props.name, e)
//     }
//
//     /**
//      * 得到一组单选框
//      */
//     getRadio() {
//         return this.props.datas.map(it => (
//                 <label key={it.value}>
//                     <input
//                         type="radio"
//                         name={this.props.name}
//                         value={it.value}
//                         checked={this.props.value === it.value}
//                         onChange={this.handleChange}
//                     />{it.text}
//                 </label>
//             )
//         )
//     }
//
//     render() {
//         const bs = this.getRadio();
//         return (
//             <div>
//                 {bs}
//             </div>
//         );
//     }
// }
//
// export default RadioBoxGroup;
