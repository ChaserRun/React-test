import React, { Component } from 'react';
import { Layout, Menu, Row, Col, Button, Input } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import IndexContent from '../pages/indexPage/index';
import './layout.css';

const Search = Input.Search;
const { Header, Content, Footer } = Layout;

class layout extends Component {

    defaultOptions = {
        defaultSelectedKeys:'1'
    }
    selectNav = (e) => {
        this.setState({
            defaultSelectedKeys: e.key
        })
    }
    render () {
        return (
            <div>
                <Layout className="layout" style={{background:'#f3f3f3'}}>
                    <Header>
                        <Row style={{width:1200,margin:'0 auto'}}>
                            <Col span={3}><div className="logo" style={{color:'#fff', fontSize:'16px'}}>起航博客</div></Col>
                            <Col span={15}>
                                <Row>
                                    <Col span={12}>
                                        <Menu
                                            onClick={(e) => this.selectNav(e)}
                                            theme="dark"
                                            mode="horizontal"
                                            defaultSelectedKeys={[this.defaultOptions.defaultSelectedKeys]}
                                            style={{lineHeight: '64px'}}
                                        >
                                            <Menu.Item key="1"><Link to={'/'}>首页</Link></Menu.Item>
                                            <Menu.Item key="2"><Link to={'/technicalStation'}>技术站</Link></Menu.Item>
                                            <Menu.Item key="3"><Link to={'/tool'}>工具</Link></Menu.Item>
                                        </Menu>
                                    </Col>
                                    <Col span={12} style={{textAlign: 'right'}}>
                                        <Search
                                            placeholder="请输入关键字"
                                            style={{ width: 280 }}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={6}>
                                <div style={{textAlign:'center'}}>
                                    <Button className={'button'} type={'primary'}>立即登录</Button>
                                    <Button className={'button'} type={'primary'}>立即注册</Button>
                                </div>
                            </Col>
                        </Row>
                    </Header>
                    <Content style={{padding: '50px'}}>
                        { this.props.children }
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </div>
        )
    }
}

export default connect(state => state)(layout);