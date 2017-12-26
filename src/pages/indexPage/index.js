import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Row, Col } from 'antd';
import * as ACTIONS from '../../actions/index';
import './index.css';

import List from './bogoList';
import SideBar from './sideBar';
import * as Data from  './data';

//const Search = Input.Search;
//const { Header, Content, Footer } = Layout;

class IndexContent extends Component {

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

    getBlogList = (params = {}) => {
        ACTIONS.fetchBlogList(params).then(data => {
            this.props.dispatch(ACTIONS.index({indexData:data}))
        })
    }

    componentDidMount () {
        this.getBlogList();
    }

    render () {
        console.log('首页===>', this.props)
        return (
            <Row className={'bogoList'} style={{width:1200,margin:'0 auto'}}>
                <Col span={16}>
                    <List></List>
                </Col>
                <Col span={8}>
                    <div style={{paddingLeft:30}}>
                        <SideBar writerList={Data.sideData}></SideBar>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default connect(state => state.IndexData)(IndexContent);