import React,{useRef} from 'react';
import styles from './index.css';

export default function index(props) {
    const txtLoginId=useRef();
    const txtLoginPwd=useRef();
  return (
    <div className={styles.login}>
      <div className={styles.item}> 
        <label>账号：</label>
        <input type="text" ref={txtLoginId}/>
      </div>
      <div className={styles.item}>  
        <label>密码：</label>
        <input type="password" ref={txtLoginPwd}/>
      </div>
      <div className={styles.item}>
        <button onClick={()=>{
            const loginId=txtLoginId.current.value;
            const loginPwd=txtLoginPwd.current.value;
            props.onLogin&& props.onLogin(loginId,loginPwd);
        }}>登录</button>
      </div>
    </div>
  );
}
