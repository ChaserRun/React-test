import React, { Component } from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
import './layout.css';
import HeaderCustom from './component/herder';

const { Content, Footer } = Layout;

class CommonLayout extends Component {

    render () {

        console.log('layout===>', this.props);

        return (
            <div>
                <Layout className="layout" style={{background:'#f3f3f3'}}>
                    <HeaderCustom data={this.props}/>
                    <Content style={{padding: '50px'}}>
                        {this.props.children}
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </div>
        )
    }
}


export default withRouter(CommonLayout);