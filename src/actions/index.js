import * as  TYPE from './type';
import API from '../service/api';
import * as fetch from '../service/httpRequest';
import { message } from 'antd';

export const blogList = (data) => {
    return {
        type: TYPE.BLOGLIST,
        data: data
    }
}

export const hotBlog = (data) => {
    return {
        type: TYPE.HOTBLOGLIST,
        data: data
    }
}

export const authorList = (data) => {
    return {
        type: TYPE.AUTHORLIST,
        data: data
    }
}

//获取blogList
export const fetchBlogList = (params = {}) => {
    return fetch.getData(API.getBlogList, params).then(data => {
        if (data && data.code === 1) {
            return data.data;
        } else {
            message.error(data.msg);
        }
    })
}

//获取hotBlogList
export const fetchHotBlog = (params = {}) => {
    return fetch.getData(API.getHotBlogList, params).then(data => {
        if( data && data.code === 1 ){
            return data.data;
        } else {
            message.error(data.msg);
        }
    })
}

//获取作者列表
export const fetchAuthorList = (params = {}) => {
    return fetch.getData(API.getAuthorList, params).then(data => {
        if( data && data.code === 1 ){
            return data.data;
        } else {
            message.error(data.msg);
        }
    })

}

//搜索
export const fetchSearchBlog = (params ={}) => {
    return fetch.getData(API.searchBlog, params).then(data => {
        if (data && data.code === 1) {
            return data.data;
        } else {
            message.error(data.msg)
        }
    })
}
