import React, {Component} from 'react'
import PropTypes from "prop-types";

export class A {

}

export class B extends A {

}

export default class ValidationComp extends Component {
    //先混合属性
    static defaultProps = {
        b: false
    }

    //再调用相应的函数进行验证
    static propTypes = {
        a: PropTypes.number.isRequired,  //a属性必须是一个数字类型,并且必填
        b: PropTypes.bool.isRequired, //b必须是一个bool属性,并且必填
        onClick: PropTypes.func, //onClick必须是一个函数
        c: PropTypes.any, //1. 可以设置必填   2. 阵型保持整齐（所有属性都在该对象中）
        d: PropTypes.node.isRequired, //d必填，而且必须是一个可以渲染的内容，字符串、数字、React元素
        e: PropTypes.element, //e必须是一个React元素
        F: PropTypes.elementType, //F必须是一个组件类型（函数组件的函数本身或是类组件的构造函数）
        g: PropTypes.instanceOf(A), //g必须是A的实例
        sex: PropTypes.oneOf(["男", "女"]), //属性必须是数组当中的一个
        h: PropTypes.arrayOf(PropTypes.number), //数组的每一项必须满足类型要求
        i: PropTypes.objectOf(PropTypes.number), //每一个对象属性必须满足类型要求
        j: PropTypes.shape({//属性必须满足该对象的要求，规定对象的格式,可以有规定以外的属性
            name: PropTypes.string,//name必须是一个字符串
            age: PropTypes.number,//age必须是一个数字
            address: PropTypes.shape({
                provice: PropTypes.string,
                city: PropTypes.string
            })
        }),
        k: PropTypes.arrayOf(PropTypes.shape({//k是一个数组且数组里是对象
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired
        })),
        score: function (props, propName, componentName) {
            console.log(props, propName, componentName);
            const val = props[propName];
            //自定义规则，该属性必须是一个数字，必填，且取值范围是0～99
            if (val === undefined || val === null) {
                return new Error(`invalid prop ${propName} in ${componentName},${propName} is required`);
            }
            if (typeof val !== 'number') {
                return new Error(`invalid prop ${propName} in ${componentName},${propName} is not a number`);
            }
            if (val < 0 || val > 99) {
                return new Error(`invalid prop ${propName} in ${componentName},${propName} is not 0~99`);
            }
        }
    }

    render() {
        const F = this.props.F;
        return (
            <div>
                {this.props.a}
                {this.props.b}
                {this.props.c}
                {this.props.d}
                {this.props.e}
                <F/>
                {this.props.sex}
                {this.props.h}
            </div>
        )
    }
}
