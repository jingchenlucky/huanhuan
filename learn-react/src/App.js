import React, {useCallback, useState} from 'react';

class Test extends React.PureComponent {
    render() {
        console.log("Test Render");
        return <div>
            <h1>{this.props.text}</h1>
            <button onClick={this.props.onClick}>改变文本</button>
        </div>
    }
}

function Parent() {
    const [txt, setTxt] = useState(123);
    const [n, setN] = useState(0);
    console.log("Parent Render");
    // useCallback解决了因为函数地址变化导致的问题，如果依赖项没有发生变化，赋值地址就不会变化。如果依赖项发生了变化，赋值为新的地址
    const handleClick = useCallback(() => {
        setTxt(123);
    }, [])
    return (
        <div>
            {/*函数的地址每次渲染发生了变化，导致子组件跟着重新渲染，若子组件是经过优化的组件，则可能会导致优化失效*/}
            {/*<Test text={txt} onClick={() => {*/}
            {/*    setTxt(123)*/}
            {/*}}/>*/}
            <Test text={txt} onClick={handleClick}/>
            <input type="number" value={n} onChange={e => {
                setN(parseInt(e.target.value))
            }}/>
        </div>
    )
}

export default function App() {
    return (
        <div>
            <Parent/>
        </div>

    );
}

