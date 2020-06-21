import React, {Component} from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';

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

    handleAdd = newTask => {
        this.setState({
            tasks: [...this.state.tasks, newTask]
        })
    }

    render() {
        console.log("TaskContainer Render,数组长度：", this.state.tasks.length);
        return (
            <div>
                <AddTask
                    onAdd={this.handleAdd}/>
                <TaskList tasks={this.state.tasks}/>
            </div>
        );
    }
}

export default TaskContainer;
