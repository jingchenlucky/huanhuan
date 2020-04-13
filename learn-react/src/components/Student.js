import React from 'react';

function Student({name,sex,birth}) {
    return (
        <li>
            【姓名】{name}
            【性别】{sex===1?'男':'女'}
            【生日】{birth}
        </li>
    );
}

export default Student;
