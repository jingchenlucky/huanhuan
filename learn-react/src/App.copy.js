import React, {useState, useEffect} from 'react';

function App() {
    const [n, setN] = useState(0);

    useEffect(() => {
        document.title = `计数器：${n}`;
    })
    console.log("渲染");
    return (
        <div>
            <span>{n}</span>
            <button onClick={() => {
                setN(n + 1);
            }}>+
            </button>
        </div>

    );
}


export default App;
