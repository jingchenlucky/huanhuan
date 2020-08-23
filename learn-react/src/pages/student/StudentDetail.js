import React from 'react';

export default function StudentDetail(props) {
    console.log("详情页信息", props);
    return (
        <div>
            <h1>
                学生信息页面
            </h1>
            <div>
                学号:{props.match.params.sNo}
            </div>
        </div>
    );
}
