import React, {Component} from 'react';
import TaskList from './TaskList';

class TaskContainer extends Component {
    state = {
        tasks: []
    }

    componentDidMount() {
        const ts = [];
        for (let i = 1; i <= 10; i++) {
            ts.push({
                name: `Task${i}`,
                isFinish: Math.random() > 0.5
            })
        }
        this.setState({
            tasks: ts
        })
    }

    render() {
        console.log("TaskContainer Render,数组长度：", this.state.tasks.length);
        return (
            <div>
                <TaskList tasks={this.state.tasks}/>
            </div>
        );
    }
}

export default TaskContainer;
