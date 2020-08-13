import React, {useState, useEffect, useRef} from 'react';


export default function App() {
    const [n, setN] = useState(10);
    const nRef = useRef(10);//{current:10};
    useEffect(() => {
        const timer = setInterval(() => {
            nRef.current--;
            setN(nRef.current);
            if (nRef.current == 0) {
                clearInterval(timer);
            }
        }, 1000)
        return () => {
            clearInterval(timer);
        }
    }, [])

    return (
        <div>
            <h1>{n}</h1>
        </div>
    );
}
