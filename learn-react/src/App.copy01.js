import React, {useState, useRef} from 'react';

window.arr = [];

export default function App(props) {
    console.log("render");
    const inpRef = useRef();
    const [n, setN] = useState(0);
    window.arr.push(inpRef);
    return (
        <div>
            <input type="text" ref={inpRef}/>
            <button onClick={() => {
                console.log(inpRef.current.value);
            }}>得到input的值
            </button>
            <input type="number" value={n} onChange={e => {
                setN(e.target.value)
            }}/>
        </div>
    );
}
