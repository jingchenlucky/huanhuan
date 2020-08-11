import {useState} from 'react';

export default function useReducer(reducer, initialState) {
    const [state, setState] = useState(initialState);

    function dispatch(action) {
        const newState = reducer(state, action);
        console.log(`日志，n的值从${state}->${newState}`);
        setState(newState);
    }

    return [state, dispatch]
}

