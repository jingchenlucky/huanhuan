import React from 'react';

const ctx = React.createContext();

function Test() {
    return <ctx.Consumer>
        {value => <h1>Test,上下文中的值：{value}</h1>}
    </ctx.Consumer>
}

export default function App(props) {
    return (
        <ctx.Provider value="abc">
            <Test/>
        </ctx.Provider>
    );
}

