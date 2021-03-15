import React, {Component} from 'react';
import './index.css'

export default class StudentSearchBar extends Component {
    // state = {
    //     key: '',
    //     sex: -1
    // };

    constructor(props) {
        super(props);
        const def = {
            key: "",
            sex: -1
        };
        this.state = Object.assign({}, def, props.defaultValue);
    }

    handleChange = (e) => {
        console.log("dianjile ")
        this.setState({
            sex: +e.target.value
        })
    }
    handleSearch=()=>{
        this.props.onSearch&&this.props.onSearch(this.state);
    }

    render() {
        console.log(this.state);
        return (
            <div className="search">
                <span>关键字：<input type="text" value={this.state.key} onChange={e => {
                    this.setState({key: e.target.value})
                }}/></span>
                <span>性别：
                    <label><input checked={this.state.sex === -1} type="radio" name="sex" value={-1}
                                  onChange={this.handleChange}/>不限</label>
                    <label><input checked={this.state.sex === 0} type="radio" name="sex" value={0}
                                  onChange={this.handleChange}/>男</label>
                    <label><input checked={this.state.sex === 1} type="radio" name="sex" value={1}
                                  onChange={this.handleChange}/>女</label>
                </span>
                <button onClick={this.handleSearch}>查询</button>
            </div>
        );
    }
}
