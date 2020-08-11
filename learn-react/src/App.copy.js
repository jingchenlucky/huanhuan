import React, {useState} from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'increase':
            return state + 2;
        case "decrease":
            if (state === 0) {
                return 0;
            }
            return state - 2;
        default:
            return state;
    }
}

export default function App(props) {
    const [n, setN] = useState(0);

    function dispatch(action) {
        const newN = reducer(n, action);
        console.log(`日志，n的值从${n}->${newN}`);
        setN(newN);
    }

    return (
        <div>
            <button onClick={() => {
                dispatch({type: 'decrease'})
            }}>-
            </button>
            <span>{n}</span>
            <button onClick={() => {
                dispatch({type: 'increase'})
            }}>+
            </button>
        </div>
    );
}
