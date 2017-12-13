import axios from 'axios';
import qs from 'qs';
import { message } from 'antd';

export const postData = (url, params, msg = '请求异常') => {
    return axios.post(url, params).then((resData) => {
        if (resData.code == 1) {
            return resData.data;
        }
    }).catch((err) => {
        console.log(err);
        message.warn(err)
    })
}

export const getData = (url, params, msg = '请求异常') => {
    return axios.get(url, params).then((resData) => {
        if (resData.code == 1) {
            return resData.data;
        }
    }).catch((err) => {
        console.log(err);
        message.warn(err)
    })
}