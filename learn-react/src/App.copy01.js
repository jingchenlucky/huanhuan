import React, {useRef} from 'react';

// class Test extends React.Component {
//     method() {
//         console.log("Test method called");
//     }
//
//     render() {
//         return <h1>Test Component</h1>
//     }
// }
function Test(props, ref) {
    return <h1 ref={ref}>Test Component</h1>
}

const TestWrapper = React.forwardRef(Test);//高阶组件，传入一个类组件返回函数组件
export default function App() {
    const testRef = useRef();
    return (
        <div>
            <TestWrapper ref={testRef}/>
            <button onClick={() => {
                console.log(testRef.current);
            }}>点击调用Test组件的method方法
            </button>
        </div>
    );
}
