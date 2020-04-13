import React from 'react';
import Student from './Student'

function StudentList(props) {
    var stus=props.stus.map(item=><Student key={item.id} {...item}/>)
    return (
        <ul>
            {stus}
        </ul>
    );
}

export default StudentList;
