import React from 'react';
import {getAllStudents} from './services/student';

function withAllStudents(Comp) {
    return class AllStudentwrapper extends React.Component {
        state = {
            stus: []
        }

        async componentDidMount() {
            const stus = await getAllStudents();
            this.setState({
                stus
            });
        }

        render() {
            console.log(this.props);
            return (
                <Comp {...this.props} stus={this.state.stus}>

                </Comp>
            );
        }
    }

}


function Test(props) {
    const list = props.stus.map(it => (<li id={it.key}>{it.name}</li>))
    return (<ul>
        {list}
    </ul>)
}

const TestStudents = withAllStudents(Test);

function App() {
    console.log("13436", TestStudents);
    return (
        <div>
            <TestStudents/>
        </div>
        //
    )

}


export default App;
