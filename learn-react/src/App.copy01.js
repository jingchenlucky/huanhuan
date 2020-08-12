import React, {useMemo, useState} from 'react';

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
    const handleClick = useMemo(() => {
        return () => {
            setTxt(txt + 1);
        }
    }, [txt])
    return (
        <div>
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

