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

export const fetchBlogList = (params = {}) => {
    return fetch.getData(API.getBlogList, params).then(data => {
        if (data && data.code == 1) {
            return data.data;
        } else {
            return message.error(data.msg);
        }
    })
}

export const fetchHotBlog = (params = {}) => {
    return fetch.getData(API.getHotBlogList, params).then(data => {
        if( data && data.code == 1 ){
            return data;
        } else {
            return message.error(data.msg);
        }
    })
}
