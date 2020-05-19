import React, {Component} from 'react';

class CheckBoxGroup extends Component {
    handleChange=e=>{
        let newArr;
        if(e.target.checked){
            newArr=[...this.props.chooseDatas,it.value]
        }else{
            newArr=this.props.chooseDatas.filter(it=>it.value!==e.target.value)
        }
        this.props.onChange&&this.props.onChange(newArr,this.props.name,e)
    }
    /**
     * 得到一组多选框
     */
    getCheckBoxes(){
        this.props.datas.map(it=>{
            <label key={it.value}>
                <input
                    type="checkbox"
                    name={this.props.name}
                    value={it.value}
                    checked={this.props.chooseDatas.includes(it.value)}
                    onChange={this.handleChange}
                />
            </label>
        })
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default CheckBoxGroup;
