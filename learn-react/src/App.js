import React, {useRef, useImperativeHandle} from 'react';

function Test(props, ref) {
    useImperativeHandle(ref, () => {
        //r如果不给依赖项，则每次运行函数组件都要调用该方法
        //如果使用了依赖项，则第一次调用后，会进行缓存，只有依赖项发生变化时才会调用该函数
        //相当于给ref对象的current属性赋初值 ref.current=1;
        console.log(123456);
        return {
            method() {
                console.log("Test Component called");
            }
        };
    }, []);
    return <h1 ref={ref}>Test Component</h1>
}

const TestWrapper = React.forwardRef(Test);//高阶组件，传入一个类组件返回函数组件
export default function App() {
    const testRef = useRef();
    return (
        <div>
            <TestWrapper ref={testRef}/>
            <button onClick={() => {
                testRef.current.method();
            }}>点击调用Test组件的method方法
            </button>
        </div>
    );
}
