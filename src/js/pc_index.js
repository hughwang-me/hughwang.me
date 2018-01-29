import React from 'react';
import ReactDOM from 'react-dom';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class PcIndex extends React.Component {

    constructor(){
        super();
        this.state = {
            collapsed: false
        }
    }

    onCollapse(){
        console.log('侧边栏点击 : ' , this.state.collapsed);
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render(){
        return (
            <Layout className="pc_layout">
                <Header
                    className="header"
                >
                    <div className="title">
                        王欢的博客
                    </div>
                    {/*<Menu*/}
                        {/*theme="dark"*/}
                        {/*mode="horizontal"*/}
                        {/*defaultSelectedKeys={['1']}*/}
                        {/*style={{ lineHeight: '64px' }}*/}
                    {/*>*/}
                        {/*<Menu.Item key="1">首 页</Menu.Item>*/}
                        {/*<Menu.Item key="2">Github</Menu.Item>*/}
                        {/*<Menu.Item key="3">关于作者</Menu.Item>*/}
                    {/*</Menu>*/}
                </Header>

                <Layout >
                    <Sider
                        className='sider'
                        trigger={null}
                        width={200}
                        style={{ background: '#fff' }}
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse.bind(this)}
                    >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 2 }}
                        >
                            <Menu.Item key="1">
                                <Icon type="pie-chart" />
                                <span>Option 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="desktop" />
                                <span>Option 2</span>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={<span><Icon type="user" /><span>User</span></span>}
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
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            Content<br/><br/><br/><br/><br/><br/>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            <br/><br/><br/>1
                            <br/><br/><br/><br/><br/><br/>
                            2
                            <br/><br/><br/><br/>
                            <br/><br/><br/>v
                        </Content>
                        <Footer>Copyright 2018 © All Rights Reserved</Footer>
                    </Layout>
                    {/*<Sider>right sidebar</Sider>*/}
                </Layout>

            </Layout>
        )
    }

}

export default PcIndex;