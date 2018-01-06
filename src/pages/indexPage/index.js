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
        pageSize: 20,
        pageNum: 1,
        orderByTime: 2
    }

    //获取博客列表
    getBlogList = (params = {}) => {
        ACTIONS.fetchBlogList(params).then(data => {
            this.props.dispatch(ACTIONS.blogList({blogList: data}))
        })
    }

    //获取热门博客列表
    getHotBlogList = (params = {}) => {
        ACTIONS.fetchHotBlog(params).then(data => {
            this.props.dispatch(ACTIONS.hotBlog({hotBlog: data}))
        })
    }

    componentDidMount () {
        this.getBlogList(this.defaultOptions);
        this.getHotBlogList();
    }

    render () {
        console.log('首页===>', this.props);
        const { blogList={}, hotBlog={} } = this.props;
        return (
            <Row className={'bogoList'} style={{width:1200,margin:'0 auto'}}>
                <Col span={16}>
                    <List
                        blogList={blogList}
                    />
                </Col>
                <Col span={8}>
                    <div style={{paddingLeft:30}}>
                        <SideBar
                            writerList={Data.sideData}
                            hotBlog={hotBlog}
                        />
                    </div>
                </Col>
            </Row>
        )
    }
}

export default connect(state => state.IndexData)(IndexContent);