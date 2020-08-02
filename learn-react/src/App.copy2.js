import React, {useState} from 'react';

function App() {
    const [data, setData] = useState({x: 1, y: 1});
    const [, forceUpdate] = useState({});
    console.log('渲染');
    return (
        <div>
            x:{data.x}
            y:{data.y}
            <button onClick={() => {
                setData({...data, x: data.x + 1})
            }}>X+1
            </button>
            <button onClick={() => {
                forceUpdate({})
            }}> 强制刷新
            </button>
        </div>

    )
        ;
}


export default App;

//  import React, {Component} from 'react';
//
//  class App extends Component {
//      constructor(props) {
//          super(props);
//          this.state = {n: 0};
//      }
//
//     render() {
//         return (
//             <div>
//                 <button onClick={() => {
//                     this.setState({n: this.state.n - 1})
//                 }}>-
//                 </button>
//                 <span>{this.state.n}</span>
//                 <button onClick={() => {
//                     this.setState({n: this.state.n + 1})
//                 }}>+
//                 </button>
//             </div>
//         );
//     }
// }
//
// export default App;
