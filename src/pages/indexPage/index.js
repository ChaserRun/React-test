import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Row, Col } from 'antd';
import * as ACTIONS from '../../actions/index';
import * as Data from './data';
import './index.css';
import List from './bogoList';
import SideBar from './sideBar';

class IndexContent extends Component {

    defaultOptions = {
        pagesize: 10,
        page: 1,
        orderByTime: 2,
        keyword: ''
    }

    //获取博客列表
    getBlogList = (params = this.defaultOptions) => {
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
        this.getBlogList();
        this.getHotBlogList();
    }

    //翻页
    changePages = (page, pageSize) => {
        this.defaultOptions.pagesize = pageSize;
        this.defaultOptions.page = page;
        this.getBlogList(this.defaultOptions);
    }

    //搜索
    handleSearch = (value) => {
        this.defaultOptions.keyword = value;
        ACTIONS.fetchSearchBlog(this.defaultOptions).then(data => {
            this.props.dispatch(ACTIONS.hotBlog({hotBlog: data}));
        })
    }

    render () {
        console.log('首页===>', this.props);
        const { blogList={}, hotBlog={} } = this.props;
        return (
            <Row className={'bogoList'} style={{width:1200,margin:'0 auto'}}>
                <Col span={16}>
                    <List
                        blogList={blogList}
                        changePages={this.changePages}
                        handleSearch={this.handleSearch}
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