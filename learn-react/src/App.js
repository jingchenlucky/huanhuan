import React, {Component} from 'react';
import {getAllStudents} from './services/student';

class StudentList extends Component {

    render() {
        const stus = this.props.stuList.map(it => <Student name={it.name} key={it.id}/>);
        return <ul>{stus}</ul>
    }
}

class Student extends Component {
    render() {
        return (< li> {this.props.name} </li>)

    }
}

class App extends Component {
    state = {
        stuList: []
    }
    loadStudnets = async () => {
        const stus = await getAllStudents();
        this.setState({stuList: stus});
    }

    render() {
        return (
            <div>
                <button onClick={this.loadStudnets}>加载学生数据</button>
                <button onClick={() => {
                    this.setState({stuList: []})
                }}>清空学生数据
                </button>
                <button onClick={() => {
                    this.setState({stuList: this.state.stuList.sort(() => Math.random() - 0.5)})
                }}>打乱顺序
                </button>
                <StudentList stuList={this.state.stuList}/>
            </div>
        );
    }
}

export default App;
