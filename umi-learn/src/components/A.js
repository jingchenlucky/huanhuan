import React from 'react'
import { withRouter } from "umi";

function A(props) {
    console.log('components/A组件路由信息',props)
    return (
        <div>
            {`匹配路径${props.location.pathname}`}
        </div>
    )
}

export default withRouter(A);