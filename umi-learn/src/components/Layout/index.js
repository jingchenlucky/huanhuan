import React from 'react';
import styles from './index.css';

export default function index(props) {
  return (
    <div>
      <div className={styles.header}>{props.header}</div>
      <div className={styles.main}>
        <div className={styles.left}>{props.left}</div>
        <div className={styles.right}>{props.right}</div>
      </div>
    </div>
  );
}
