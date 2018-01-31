import React, { Component } from 'react';
import { Row, Col, Menu, Button, Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Header} = Layout;

class HeaderCustom extends Component {

    state = {
        pathname: ''
    }


    render () {
        const { location } = this.props.data;
        return (
            <div>
                <Header>
                    <Row style={{width:1200,margin:'0 auto'}}>
                        <Col span={3}>
                            <Link to={'/'}><div className="logo" style={{color:'#fff', fontSize:'16px'}}>起航博客</div></Link>
                        </Col>
                        <Col span={15}>
                            <Row>
                                <Col span={24}>
                                    <Menu
                                        theme="dark"
                                        mode="horizontal"
                                        defaultSelectedKeys={[location.pathname]}
                                        style={{lineHeight: '64px'}}
                                    >
                                        <Menu.Item key="/"><Link to={'/'}>首页</Link></Menu.Item>
                                        <Menu.Item key="/technicalStation"><Link to={'/technicalStation'}>技术站</Link></Menu.Item>
                                        <Menu.Item key="/tool"><Link to={'/tool'}>工具</Link></Menu.Item>
                                    </Menu>
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
            </div>
        )
    }
}

export default HeaderCustom;