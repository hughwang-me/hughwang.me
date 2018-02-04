import React from 'react';
import ReactDOM from 'react-dom';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class MobIndex extends React.Component {

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
                        手机端
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


            </Layout>
        )
    }

}

export default MobIndex;