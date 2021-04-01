import React from 'react';
import { Layout } from 'antd';
import styles from './index.css';

const { Header, Footer, Sider, Content } = Layout;

export default function index() {
  return (
    <div>
      <Layout>
        <Header className={styles.header}>Header</Header>
        <Content className={styles.content}>
          <div style={{height:'100px'}}>fdafsfsafd</div>
          <div style={{height:'100px'}}>fdafsfsafd</div>
          <div style={{height:'100px'}}>fdafsfsafd</div>
        </Content>
        <Footer className={styles.footer}>Footer</Footer>
      </Layout>
    </div>
  );
}
