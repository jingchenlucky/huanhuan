import React from 'react';
import {withRouter} from "react-router-dom"

function Link(props) {
    console.log(props);
    return (
        <a href="javascript:;" onClick={(e) => {
            e.preventDefault();
            props.history.push(props.to)
        }}>{props.children}</a>
    );
}

export default withRouter(Link);
