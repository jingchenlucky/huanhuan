import React, {useState} from 'react';
import 'animate.css';
import {v4 as uuidv4} from 'uuid';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './App.css'

export default function App(props) {
    console.log(uuidv4());
    const [taskList, setTaskList] = useState([
        {id: uuidv4(), name: '任务1'},
        {id: uuidv4(), name: '任务2'}
    ])
    return (
        <div>
            <TransitionGroup>
                {taskList.map(it => (<CSSTransition timeout={2000} key={it.id}>
                    <div>{it.name}
                        <button onClick={() => {
                            setTaskList(taskList.filter(item => item.id !== it.id))
                        }}>删除</button>
                    </div>

                </CSSTransition>))}
            </TransitionGroup>
            <button onClick={()=>{
                var name=window.prompt("请输入名字");
                setTaskList([...taskList,{id:uuidv4(),name}])
            }}>添加</button>
        </div>
    );
}
