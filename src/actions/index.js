import * as  TYPE from './type';
import API from '../service/api';
import * as fetch from '../service/httpRequest';
import { message } from 'antd';

export const index = (data) => {
    return {
        type: TYPE.INDEX,
        data: data
    }
}

export const fetchBlogList = () => {
    return fetch.getData(API.getBlogList).then(data => {
        console.log('actionData=>', data);
        if (data && data.code == 1) {
            return data;
        } else {
            return message.error(data.msg);
        }
    })
}
