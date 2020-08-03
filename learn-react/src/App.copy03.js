import React, {useState, useEffect} from 'react';

const ref = React.createRef();
window.timer = null; //计时器ID

function stop() {
    console.log("清理计数器");
    clearInterval(window.timer); //清空之前的计时器
    window.timer = null;
}

/**
 *一个可移动的块，该组件每次渲染完成后，始终从0，0坐标在1秒钟内，移动到目标点坐标
 * （props.left，props.right)要移动的目标点
 */
function MoveBlock(props) {
    console.log("移动函数");
    useEffect(() => {
        console.log("副作用函数");
        // stop();
        //渲染完成后
        const div = ref.current;
        let curTimes = 0;
        const disX = props.left / 100;
        const disY = props.top / 100;
        window.timer = setInterval(() => {
            curTimes++;
            const newLeft = curTimes * disX;
            const newTop = curTimes * disY;
            div.style.left = newLeft + 'px';
            div.style.top = newTop + 'px';
            if (curTimes === 100) {
                stop();
            }
        }, 10);
        // return ()=>{
        //     console.log("清理函数");
        // }
        return stop;
    },[props.left,props.right])
    return (
        <div ref={ref} style={{width: 100, height: 100, background: 'red', position: 'fixed'}}>

        </div>

    );
}

function App() {
    const [point, setPoint] = useState({x: 100, y: 100});
    const [visible, setVisible] = useState(true);
    const txtX = React.createRef();
    const txtY = React.createRef();
    return (
        <div style={{paddingTop: 100}}>
            {visible && (
                <div>
                    x: <input type="number" ref={txtX}/>
                    y: <input type="number" ref={txtY}/>
                    <button onClick={() => {
                        setPoint({
                            x: parseInt(txtX.current.value),
                            y: parseInt(txtY.current.value)
                        })
                    }}>确定
                    </button>
                    <MoveBlock left={point.x} top={point.y}/>
                </div>)}
            <button onClick={() => {
                setVisible(!visible);
            }}>显示/隐藏
            </button>
        </div>

    );
}


export default App;
