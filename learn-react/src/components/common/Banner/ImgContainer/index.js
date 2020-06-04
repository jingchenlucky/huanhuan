import React, {Component} from 'react';
import './index.css'
import PropTypes from 'prop-types';

class ImgContainer extends Component {
    static propTypes = {
        imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired,//图片路径的数组
        imgWidth: PropTypes.number.isRequired,//单张图片宽度
        imgHeight: PropTypes.number.isRequired//单张图高度
    }
    tick = 16;//定时器的间隔时间
    timer = null;//计时器
    containerRef = el => {
        this.div = el;//把dom对象放进div变量里保存
    }


    /**
     * 切换到第几张图片
     * 调用该组件，此组件会经过一段动画完成切换
     * index 图片下标从0开始
     * @returns {*}
     */
    switchTo(index) {
        // 设置正确index
        if (index < 0) {
            index = 0
        } else if (index > this.props.imgSrcs.length - 1) {
            index = this.props.imgSrcs.length - 1;
        }
        console.log(this.div, index);
        //1根据index,设置div最终的marginLeft
        const targetLeft = -index * this.props.imgWidth;
        // this.div.style.marginLeft = targetLeft + 'px';
        //2得到当前的marginLeft
        let curLeft = parseFloat(window.getComputedStyle(this.div).marginLeft);
        //3计算运动次数
        const times = Math.ceil(this.props.duration / this.tick);
        let curTimes = 0;//当前运动次数
        // 4计算每次运动距离
        const totalDis = targetLeft - curLeft;//总距离
        const dis = totalDis / times;//每次运动距离
        //先停止之前动画
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            curTimes++;
            curLeft += dis;
            this.div.style.marginLeft = curLeft + 'px';

            // console.log(curTimes);
            if (curTimes === times) {
                //停止运动
                this.div.style.marginLeft = targetLeft + 'px';
                clearInterval(this.timer);
            }
        }, this.tick)
    }

    render() {
        const imgs = this.props.imgSrcs.map((src, i) => <img src={src} key={i} alt="" style={{
            width: this.props.imgWidth,
            height: this.props.imgHeight,
            float: 'left'
        }}/>)
        return (
            <div
                ref={this.containerRef}
                style={{
                    width: this.props.imgSrcs.length * this.props.imgWidth,
                    height: this.props.imgHeight
                }}>
                {imgs}
            </div>
        )
    }
}

export default ImgContainer;
