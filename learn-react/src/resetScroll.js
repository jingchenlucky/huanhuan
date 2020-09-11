let timer1, timer2;
/**
 * 滚动条纵向横向复位
 */
export default function resetScroll() {
    clearInterval(timer1);
    clearInterval(timer2);
    let html = document.documentElement;
    timer1 = animate(html.scrollTop, 0, (val) => {
        html.scrollTop = val;
    })
    timer2 = animate(html.scrollLeft, 0, (val) => {
        html.scrollLeft = val;
    })
}

/**
 * 1秒钟之内从start 到end
 * @param start
 * @param end
 */

function animate(start, end, callBack) {
    var tick = 16;//每隔16ms
    var total = 1000;
    var times = Math.ceil(total / tick);
    var curTime = 0;
    var dis = (end - start) / times;//每次运动距离
    var timer = setInterval(() => {
        curTime++;
        start += dis;

        if (curTime === times) {
            clearInterval(timer);
        }
        // console.log(start);
        callBack(start);

    }, tick)
    return timer;
}
