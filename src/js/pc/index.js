import React from 'react';
import ReactDOM from 'react-dom';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

import { Row, Col } from 'antd';
import { Modal } from 'antd';

class PcIndex extends React.Component {

    constructor(){
        super();
        this.state = {
            collapsed: false,
            qrcodeVisible: false
        }
    }

    onCollapse(){
        console.log('侧边栏点击 : ' , this.state.collapsed);
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    wehcat(){
        this.setState({
            qrcodeVisible:true
        })
    }

    wehcatClose(){
        this.setState({
            qrcodeVisible:false
        })
    }

    render(){
        return (
            <Layout className="pc_layout">
                <Header
                    className="web_header"

                >
                    <Row>
                        <Col span={2} className=''/>
                        <Col span={18} className='web_title'>Hugh Wang</Col>
                        <Col span={3} className=''> <a href='https://github.com/hughwang-me' target="_blank"><Icon type="github" /> Github</a>
                            &nbsp;&nbsp; <a onClick={this.wehcat.bind(this)}><Icon type="wechat" /> 18501667737</a></Col>
                        <Col span={1} className=''/>
                    </Row>
                </Header>
                <Layout >
                    <Sider
                        className='sider'
                        trigger={null}
                        width={200}
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse.bind(this)}
                    >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['']}
                            style={{ height: '100%', borderRight: 2 }}
                        >
                            <SubMenu
                                key="java"
                                className='subMenuItem'
                                title={<span><i class="iconfont">&#xe746;</i>&nbsp;&nbsp;<span className='subMenuItemTitle'>JAVA 基础</span></span>}
                            >
                                <Menu.Item key="3">Tom</Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                                <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="react"
                                className='subMenuItem'
                                title={<span><i class="iconfont">&#xe64b;</i>&nbsp;&nbsp;<span className='subMenuItemTitle'>React</span></span>}
                            >
                                <Menu.Item key="3">Tom</Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                                <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="ds"
                                className='subMenuItem'
                                title={<span><i class="iconfont">&#xe602;</i>&nbsp;&nbsp;<span className='subMenuItemTitle'>数据结构</span></span>}
                            >
                                <Menu.Item key="3">Tom</Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                                <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="network"
                                className='subMenuItem'
                                title={<span><i class="iconfont">&#xe612;</i>&nbsp;&nbsp;<span className='subMenuItemTitle'>计算机网络</span></span>}
                            >
                                <Menu.Item key="3">Tom</Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                                <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="os"
                                className='subMenuItem'
                                title={<span><i class="iconfont">&#xe607;</i>&nbsp;&nbsp;<span className='subMenuItemTitle'>操作系统</span></span>}
                            >
                                <Menu.Item key="3">Tom</Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                                <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout className={'content_layout'}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ background: '#eee', padding: 0, margin: 0, minHeight: 0 }}>
                            Content
                        </Content>
                        <Footer>Copyright 2018 © All Rights Reserved</Footer>
                    </Layout>
                    {/*<Sider>right sidebar</Sider>*/}
                </Layout>

                {/*二维码浮层*/}
                <Modal
                    title="微信二维码"
                    visible={this.state.qrcodeVisible}
                    footer={null}
                    onCancel={this.wehcatClose.bind(this)}
                    width={423}
                >
                    <img src='./img/wechat.jpg' alt="wechat"/>
                </Modal>

            </Layout>
        )
    }

}

export default PcIndex;