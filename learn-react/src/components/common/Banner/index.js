import React, {Component} from 'react';
import './index.css'
import PropTypes from 'prop-types';
import ImgContainer from './ImgContainer/index';
import SwitchArrow from './switchArrow/index';
import SwitchDot from './SwitchDot/index';

class Banner extends Component {
    static defaultProps = {
        width: 520,
        height: 280,
        imgSrcs: [],
        autoDuration: 1000,
        duration: 500
    }
    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired,
        autoDuration: PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired
    }
    state = {
        curIndex: 0
    }

//一开始就自动轮播
    componentDidMount() {
        this.autoSwitch();
    }

//组件销毁时销毁计时器
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    imgContainerRef = el => {
        this.imgContainer = el;
    }
    handleArrowChange = (type) => {
        // console.log(type);
        let cur = this.state.curIndex;
        if (type === 'left') {
            cur--;
            if (cur < 0) {
                cur = this.props.imgSrcs.length - 1;
            }
        } else {
            cur++;
            if (cur > this.props.imgSrcs.length - 1) {
                cur = 0;
            }
        }
        this.handleSwitch(cur);
    }

    timer = null;//自动切换图片计时器
    autoSwitch = () => {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            var cur = this.state.curIndex;
            cur = (cur + 1) % this.props.imgSrcs.length;
            this.handleSwitch(cur);
        }, this.props.autoDuration)
    }
    /**
     * 切换到
     * @returns {*}
     */
    handleSwitch = index => {
        // 得到ImgContainer的组件对象
        this.setState({
            curIndex: index
        })
        console.log(this.imgContainer);
        console.log(11111, index);
        this.imgContainer.switchTo(index)
    }

    render() {
        return (
            <div
                className="banner-container"
                style={{width: this.props.width, height: this.props.height}}
                onMouseEnter={() => {
                    clearInterval(this.timer)
                }}
                onMouseLeave={this.autoSwitch}
            >
                <ImgContainer
                    ref={this.imgContainerRef}
                    imgSrcs={this.props.imgSrcs}
                    imgWidth={this.props.width}
                    imgHeight={this.props.height}
                    duration={this.props.duration}
                />
                <SwitchArrow onChange={this.handleArrowChange}/>
                <SwitchDot
                    total={this.props.imgSrcs.length}
                    curIndex={this.state.curIndex}
                    onChange={this.handleSwitch}
                />
                <button onClick={() => {
                    this.handleSwitch(2)
                }}>切换到第3张图片
                </button>
                <button onClick={() => {
                    this.handleSwitch(1)
                }}>切换到第2张图片
                </button>
            </div>
        );
    }
}

export default Banner;
