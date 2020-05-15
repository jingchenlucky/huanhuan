import React, {Component} from 'react';
import NumberInput from './components/NumberInput';

class App extends Component {
    state = {
        val: '12993',
        checked: false,
        loves: ['足球', '篮球', '音乐', '其他'],
        chooseLoves: ['篮球', '音乐'],
        setVal: 'beijing',
        radioFunChoose: ['喜欢', '不喜欢'],
        radioFunChoosed: '不喜欢'
    }

    render() {
        const checkboxs = this.state.loves.map(it => (
            <label key={it}>
                <input
                    type="checkbox"
                    checked={this.state.chooseLoves.includes(it)}
                    onChange={e => {
                        if (e.target.checked) {//选中了,加一项
                            this.setState({
                                chooseLoves: [...this.state.chooseLoves, it]
                            })
                        } else {//不被选中，移除该项
                            this.setState({
                                chooseLoves: this.state.chooseLoves.filter(l => l !== it)
                            })
                        }

                    }}

                />{it}
            </label>
        ))

        const radioFun = this.state.radioFunChoose.map(i => (
            <div key={i}>
                <input type="radio"
                       checked={this.state.radioFunChoosed === i}
                       onChange={e => {
                           console.log(e.target.value, i);
                           if (e.target.value === 'on') {
                               this.setState(
                                   {
                                       radioFunChoosed: i
                                   }
                               )
                           }
                       }}
                />
                <label>{i}</label>
            </div>

        ));
        return (
            <div>
                <input type="text" value={this.state.val} onChange={(e) => {
                    this.setState({
                        val: e.target.value
                    })
                }}/>
                <button onClick={() => {
                    console.log(this.state.val);
                }}>获取文本框的值
                </button>

                <NumberInput/>

                {/*<input type="checkbox" checked={this.state.checked} onChange={e => {*/}
                {/*    this.setState({*/}
                {/*        checked: e.target.checked*/}

                {/*    })*/}
                {/*}}/>*/}

                {/*多选框*/}
                {checkboxs}
                <button onClick={() => {
                    console.log(this.state.chooseLoves);
                }}>获取多选框到值
                </button>

                {/*下拉列表*/}
                <select value={this.state.setVal} onChange={e => {
                    this.setState({
                        setVal: e.target.value
                    })
                }}>
                    <option value="beijing">北京</option>
                    <option value="shanghai">上海</option>
                    <option value="hangzhou">杭州</option>
                </select>
                <button onClick={() => {
                    console.log(this.state.setVal);
                }}>获取下拉框到值
                </button>

                {/*单选框*/}
                {radioFun}
                {/*<input type="radio" name="killOrder" value="1"/>*/}
                {/*<label >是</label>*/}
                {/*<input type="radio" name="killOrder" value="0" checked/>*/}
                {/*<label >否</label>*/}
            </div>
        );
    }
}

export default App;
