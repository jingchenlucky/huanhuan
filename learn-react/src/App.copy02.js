import React, {useState, useEffect} from 'react';

let timer;

export default function App() {
    const [n, setN] = useState(10);
    useEffect(() => {
        if (n === 0) {
            return;
        }
        timer = setTimeout(() => {
            console.log(n);
            setN(n - 1);
        }, 1000);
        return () => {
            clearTimeout(timer);
        }
    }, [n])

    return (
        <div>
            <h1>{n}</h1>
        </div>
    );
}
