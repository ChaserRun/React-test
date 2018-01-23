import * as  TYPE from './type';
import API from '../service/api';
import * as fetch from '../service/httpRequest';
import { message } from 'antd';

export const blogContent = (data) => {
    return {
        type: TYPE.BLOGCONTENT,
        data: data
    }
}

//获取blog content
export const getBlogContent = (params = {}) => {
    return fetch.postData(API.getBlogContent, params).then(data => {
        if (data && data.code === 1) {
            return data.data;
        } else {
            message.error(data.msg);
        }
    })
}