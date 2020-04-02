import React from 'react';

function Student(props) {
    console.log(props);
    return (
        <li>
            地址{props.address}
            出生年月{props.birth}
            邮箱{props.email}
        </li>
    );
}

export default Student;
