import React, {Component} from 'react';
import types from '../../../utils/commonTypes';
import PropTypes from 'prop-types';
import withDataGroup from '../hoc/withDataGroup'

class CheckBox extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        chooseDatas: types.chooseDatas,
        onChange: PropTypes.func,
        info: types.singleData.isRequired
    }

    handleChange = e => {
        let newArr;
        if (e.target.checked) {
            newArr = [...this.props.chooseDatas, e.target.value]
        } else {
            newArr = this.props.chooseDatas.filter(it => it !== e.target.value)
        }
        this.props.onChange && this.props.onChange(newArr)
    }

    render() {
        return (
            <label>
                <input
                    type="checkbox"
                    name={this.props.name}
                    value={this.props.info.value}
                    checked={this.props.chooseDatas.includes(this.props.info.value)}
                    onChange={this.handleChange}
                />{this.props.info.text}
            </label>
        )
    }
}

export default withDataGroup(CheckBox);

// class CheckBoxGroup extends Component {
//     /**
//      * 默认属性
//      * @param e
//      */
//     static defaultProps = {
//         datas: [],
//         chooseDatas: []
//     }
//
//     static propTypes = {
//         datas: types.groupDatas.isRequired,
//         name: PropTypes.string.isRequired,
//         chooseDatas: types.chooseDatas,
//         onChange:PropTypes.func
//     }
//
//     handleChange = e => {
//         let newArr;
//         if (e.target.checked) {
//             newArr = [...this.props.chooseDatas, e.target.value]
//         } else {
//             newArr = this.props.chooseDatas.filter(it => it !== e.target.value)
//         }
//         this.props.onChange && this.props.onChange(newArr, this.props.name, e)
//     }
//
//     /**
//      * 得到一组多选框
//      */
//     getCheckBoxes() {
//         return this.props.datas.map(it => (
//                 <label key={it.value}>
//                     <input
//                         type="checkbox"
//                         name={this.props.name}
//                         value={it.value}
//                         checked={this.props.chooseDatas.includes(it.value)}
//                         onChange={this.handleChange}
//                     />{it.text}
//                 </label>
//             )
//         )
//     }
//
//     render() {
//         const bs = this.getCheckBoxes();
//         return (
//             <div>
//                 {bs}
//             </div>
//         );
//     }
// }
//
// export default CheckBoxGroup;
