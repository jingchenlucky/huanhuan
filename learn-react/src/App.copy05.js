import React, {useState, useEffect} from 'react';

function App() {
    const [x, setX] = useState(0);
    useEffect(() => {
        setTimeout(() => {
           console.log(x);//x指向App函数调用时的x
        }, 1000);
    });
    return (
        <div>
            <span>{x}</span>
            <button onClick={() => {
                setX(x + 1);
            }}>x+1
            </button>
        </div>

    );
}


export default App;
