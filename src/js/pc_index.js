import React from 'react';
import ReactDOM from 'react-dom';

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class PcIndex extends React.Component {

    render(){
        return (
            <div>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        )
    }

}

export default PcIndex;