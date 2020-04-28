import React from 'react';
import './index.css'

function Index(props) {
    console.log(props);
    var defaultProps = {
        bg: 'rgba(0,0,0,0.5)'
    }
    var datas = Object.assign({}, defaultProps, props)
    return (
        <div className="modal" style={{background: datas.bg}} onClick={e=>{
            if(e.target.className==='modal'){
                datas.onClose();
            }
        }}>
            <div className="modal-center">
                {props.children}
            </div>

        </div>
    );
}

export default Index;
