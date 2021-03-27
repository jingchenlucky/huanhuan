import React,{useRef} from 'react';
import styles from './index.css';

export default function index() {
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
            const id=txtLoginId.current.value;
            const pwd=txtLoginPwd.current.value;
            console.log("2131231313",id,pwd)
        }}>登录</button>
      </div>
    </div>
  );
}
