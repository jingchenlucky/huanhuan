import React, {Component} from 'react';

class NewLifeCycle extends Component {
    state={
        n:0
    }
    // static getDerivedStateFromProps(nextProps,prevState){
    //     console.log("getDerivedStateFromProps");
    //     console.log(nextProps, prevState);
    //     return null;
    // }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate",prevProps, prevState);
        return 123;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate",snapshot);
    }

    render() {
        return (
            <div>
                <h1>{this.state.n}</h1>
                <p>
                    <button onClick={()=>{
                        this.setState({
                            n:this.state.n+1
                        })
                    }}>+1</button>
                </p>

            </div>
        );
    }
}

export default NewLifeCycle;
