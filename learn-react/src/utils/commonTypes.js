import PropTypes from 'prop-types';

export default {
    children:PropTypes.node,
    groupDatas:PropTypes.arrayOf(PropTypes.shape({//是一个数组，且数组里是由对象组成
        value:PropTypes.string.isRequired,
        text:PropTypes.string.isRequired
    })),//多选框，下拉框，单选框的数据
    chooseDatas:PropTypes.arrayOf(PropTypes.string),//字符串数组
}
