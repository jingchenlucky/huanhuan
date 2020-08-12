import React, {useMemo, useState} from 'react';

function Item(props) {
    return <li>{props.value}</li>
}

export default function App() {
    const [range] = useState({min: 1, max: 1000});
    const [n, setN] = useState(0);
    // const list = [];
    // for (let i = range.min; i < range.max; i++) {
    //     console.log(i);
    //     list.push(<Item key={i} value={i}></Item>)
    // }
    const list = useMemo(() => {//list数组没有发生变化，且数组中每一项都没发生变化，不会重新渲染
        const list = [];
        for (let i = range.min; i < range.max; i++) {
            console.log(i);
            list.push(<Item key={i} value={i}></Item>)
        }
        return list
    }, [range.max, range.min]);
    return (
        <div>
            <ul>{list}</ul>
            <input type="number" value={n} onChange={e => setN(parseInt(e.target.value))}/>
        </div>


    );
}

