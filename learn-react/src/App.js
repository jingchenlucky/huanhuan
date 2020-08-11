import React from 'react';
import useReducer from './useReducer';

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
    const [n, dispatch] = useReducer(reducer, 0);

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
