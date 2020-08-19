import React, {Component} from 'react';
import FadeTransition from './components/common/FadeTransition';
import {TransitionGroup} from "react-transition-group";
import {v4 as uuidv4} from 'uuid';

export default class App extends Component {
    state = {
        taskList: [{id: uuidv4(), name: '任务1'}, {id: uuidv4(), name: '任务2'}, {id: uuidv4(), name: '任务3'}]
    }

    render() {
        return (
            <div>
                <TransitionGroup component="ul">
                    {this.state.taskList.map(it => (
                        <FadeTransition appear classNames="abc" key={it.id} timeout={500}>
                            <li>{it.name}
                                <button onClick={() => {
                                    this.setState({
                                        taskList: this.state.taskList.filter(item => (item.id !== it.id))
                                    })

                                }}>删除
                                </button>
                            </li>
                        </FadeTransition>
                    ))}

                </TransitionGroup>

                <button onClick={() => {
                    var name = window.prompt("请输入任务名称")
                    this.setState({
                        taskList: [...this.state.taskList, {id: uuidv4(), name}]
                    })

                }}>
                    添加按钮
                </button>
            </div>
        );
    }
}
