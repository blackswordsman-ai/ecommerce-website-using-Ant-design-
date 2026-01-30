import React from 'react';
import { Layout } from 'antd';
import Header from './Header';
import FooterWidget from './FooterWidget';
import FooterCopyRight from './FooterCopyRight';
import ChatBot from '../../components/common/ChatBot';

const { Header: AntHeader, Content, Footer: AntFooter } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <AntHeader style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000, 
        width: '100%',
        height: 'auto',
        lineHeight: 'normal',
        padding: 0,
        background: '#fff'
      }}>
        <Header />
      </AntHeader>
      <Content>
        {children}
      </Content>
      <ChatBot />
      <AntFooter style={{ padding: 0, background: '#fff' }}>
        <FooterWidget />
        <FooterCopyRight />
      </AntFooter>
    </Layout>
  );
};


export default MainLayout;
