import React from 'react';
import ReactDOM from 'react-dom';

function ChildA() {
    return ReactDOM.createPortal(<div className='child-a' style={{marginTop:200}}>
        <h1>ChildA</h1>
        <ChildB/>
    </div>, document.querySelector('.modal'));
}

function ChildB() {
    return <div className='child-b'>
        <h1>ChildB</h1>
    </div>

}

function App(props) {
    return (
        <div className="app" onClick={e=>{
            console.log('APP被点击',e.target);
        }}>
            <h1>APP</h1>
            <ChildA/>
        </div>
    );
}

export default App;
