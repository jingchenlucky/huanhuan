import React, {useState, useEffect, useRef} from 'react';


export default function App() {
    const [n, setN] = useState(10);
    const timeRef = useRef();
    useEffect(() => {
        if (n === 0) {
            return;
        }
        timeRef.current = setTimeout(() => {
            console.log(n);
            setN(n - 1);
        }, 1000);
        return () => {
            clearTimeout(timeRef.current);
        }
    }, [n])

    return (
        <div>
            <h1>{n}</h1>
        </div>
    );
}
