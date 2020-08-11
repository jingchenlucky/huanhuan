import React, {useContext} from 'react';

const ctx = React.createContext();

function Test() {
    const value = useContext(ctx);//直接将上下文拿下来
    return <h1>Test,上下文中的值：{value}</h1>
}

export default function App(props) {
    return (
        <ctx.Provider value="abc21">
            <Test/>
        </ctx.Provider>
    );
}

