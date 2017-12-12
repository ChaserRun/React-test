import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Row, Col, Button, Input } from 'antd';
import './index.css';

const Search = Input.Search;
const { Header, Content, Footer } = Layout;


class IndexPage extends Component {

    defaultOptions = {
        skillMap:['PHP', 'JAVA', 'NodeJs', 'web前端'],
        toolMap:['IP转换', '正则转换', '时间转换']
    }

    renderOverLay = (items) => {
        return (
            <Menu>
                {items.map((item, key) => {
                    return (
                        <Menu.Item key={ key } >
                            <Link to={'#'}>{ item }</Link>
                        </Menu.Item>
                    )
                })}
            </Menu>
        )
    }
    render () {
        console.log('=======>', this.props)
        return (
            <Layout className="layout">
                <Header>
                    <Row>
                        <Col span={3}><div className="logo" style={{color:'#fff', fontSize:'16px'}}>起航博客</div></Col>
                        <Col span={15}>
                            <Row>
                                <Col span={12}>
                                    <Menu
                                        theme="dark"
                                        mode="horizontal"
                                        defaultSelectedKeys={['2']}
                                        style={{lineHeight: '64px'}}
                                    >
                                        <Menu.Item key="1">首页</Menu.Item>
                                        <Menu.Item key="2">技术站</Menu.Item>
                                        <Menu.Item key="3">工具</Menu.Item>
                                        <Menu.Item key="4">知识问答</Menu.Item>
                                    </Menu>
                                </Col>
                                <Col span={12} style={{textAlign: 'right'}}>
                                    <Search
                                        placeholder="请输入关键字"
                                        style={{ width: 200 }}
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
                <Content style={{padding: '0 50px'}}>
                    <Row className={'content'}>
                        <Col span={18}>
                            博客列表
                        </Col>
                        <Col span={6}>
                            侧边
                        </Col>
                    </Row>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        )
    }
}

export default IndexPage