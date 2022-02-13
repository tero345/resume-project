import './App.css';
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from "react-scroll";

import Main from './pages/main';
import About from './pages/about';
import Skill from './pages/skill';
import Project from './pages/project';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
       <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: '#fff' }}>
          <div className="logo" style={{fontWeight:'bold', fontSize:20}}>
            <Link to="0" spy={true} smooth={true}>PORTFOLIO</Link>
          </div>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['']} style={{marginLeft:'600px', fontWeight:'bold'}}>
          <Menu.Item key="1"><Link to="1" spy={true} smooth={true}>ABOUT</Link></Menu.Item>
          <Menu.Item key="2"><Link to="2" spy={true} smooth={true}>SKILLS</Link></Menu.Item>
          <Menu.Item key="3"><Link to="3" spy={true} smooth={true}>PROJECT</Link></Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout" style={{ backgroundColor:'#e6e6e6'}}>
          <div className="site-layout-background"> 
            <div id="0"><Main /></div>
            <div id="1"><About /></div>
            <div id="2"><Skill /></div>
            <div id="3"><Project /></div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: '#3f4345', color:'#ccc' }}>©2022 KANG MINSEOK All rights reserved.</Footer>
      </Layout>
  );
}

export default App;
