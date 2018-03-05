import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import * as ACTIONS from '../../actions/index';
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

    componentDidMount () {
        this.getBlogList();
        this.getHotBlogList();
        this.getAuthorList()
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

    //获取作者列表
    getAuthorList = (params = {}) => {
        ACTIONS.fetchAuthorList(params).then(data => {
            this.props.dispatch(ACTIONS.authorList({authorList: data}))
        })
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
            this.props.dispatch(ACTIONS.blogList({blogList: data}))
        })
    }

    render () {
        // console.log('首页===>', this.props);
        const { blogList }  = this.props;
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
                            writerList={this.props.authorList}
                            hotBlog={this.props.hotBlog}
                        />
                    </div>
                </Col>
            </Row>
        )
    }
}

export default connect(state => state.IndexData)(IndexContent);