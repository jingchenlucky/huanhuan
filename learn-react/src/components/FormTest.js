import React, {Component} from 'react';

class FormTest extends Component {
    state = {
        loginId: '453',
        loginPwd: '',
        sex: 'male',
        chooseLoves: [],
        loves: [
            {value: 'football', text: '足球'},
            {value: 'basektball', text: '篮球'},
            {value: 'movie', text: '电影'},
            {value: 'music', text: '音乐'},
            {value: 'other', text: '其他'}
        ],
        city: 'hangzhou'
    }
    handleChange = e => {
        let val = e.target.value;
        let name = e.target.name;
        if (e.target.type == "checkbox") {
            if (e.target.checked) {//被选中加一项
                val = [...this.state.chooseLoves, val]
            } else {//没被选中，移除
                val=this.state.chooseLoves.filter(i => (i !== val))
            }
        }
        //方式1
        this.setState({
            [name]: val
        })
        // 方式2
        // let newParialState={};
        // newParialState[name]=val;
        // this.setState(newParialState);
    }

    getChooseBoxs() {
        let checkboxs = this.state.loves.map(it => (
            <label kye={it.value}>
                <input type="checkbox"
                       name="chooseLoves"
                       onChange={this.handleChange}
                       checked={this.state.chooseLoves.includes(it.value)}
                       value={it.value}
                />{it.text}
            </label>
        ))
        return checkboxs;
    }

    render() {
        return (
            <div>
                <p>
                    <input type="text" name="loginId" value={this.state.loginId} onChange={this.handleChange}/>
                </p>
                <p>
                    <input type="text" name="loginPwd" value={this.state.loginPwd} onChange={this.handleChange}/>
                </p>
                <p>
                    <select name="city" id="" value={this.state.city} onChange={this.handleChange}>
                        <option value="beijing">北京</option>
                        <option value="shanghai">上海</option>
                        <option value="hangzhou">杭州</option>
                    </select>
                </p>
                <p>
                    <label>
                        <input type="radio" name="sex" value="male" onChange={this.handleChange}
                               checked={this.state.sex === "male"}/>
                        男
                        <input type="radio" name="sex" value="female" onChange={this.handleChange}
                               checked={this.state.sex === "female"}/>
                        女
                    </label>
                </p>
                <p>
                    {this.getChooseBoxs()}
                </p>
                <p>
                    <button onClick={() => {
                        console.log(this.state);
                    }}>获取所有属性
                    </button>
                </p>

            </div>
        );
    }
}

export default FormTest;
