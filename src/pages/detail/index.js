import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogContent from './blogContent';
import CommentList from './commentList';
import AddComment from './addComment';
import * as ACTIONS from '../../actions/detail';

class BlogDetail extends Component {

    componentDidMount () {
        this.getBlogContent({id: 1});
    }

    //获取博客内容
    getBlogContent = (params = {}) => {
        ACTIONS.getBlogContent(params).then(data => {
            this.props.dispatch(ACTIONS.blogContent({blogContent: data}));
        })
    }

    render () {
        return (
            <div>
                <BlogContent />
                <AddComment />
                <CommentList />
            </div>
        )
    }
}

export default connect(state => state)(BlogDetail);