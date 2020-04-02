import React, {Component} from 'react';
import Student from './Student';

class StudentList extends Component {
    render() {
        const students=this.props.stus.map(item=><Student key={item.id} {...item}/>)
        return (
            <ul>
                {students}
            </ul>
        );
    }
}

export default StudentList;
