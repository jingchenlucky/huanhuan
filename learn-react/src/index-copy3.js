import React from 'react';
import ReactDOM from 'react-dom';

const content = "<h1>111111<p>33333</p>4444</h1>"
// const div1=(
//     <div>
//         {content}
//     </div>
// )
const div1 = (
    <div dangerouslySetInnerHTML={{
        __html:content
    }}>

    </div>
)
ReactDOM.render(
    div1,
    document.getElementById('root')
);
