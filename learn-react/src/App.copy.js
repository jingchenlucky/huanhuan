import React, {useState} from 'react';

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
    console.log("Parent Render");
    return <Test text={txt} onClick={() => {
        setTxt(Math.random())
    }}/>
}

export default function App() {
    return (
        <div>
            <Parent/>
        </div>

    );
}

