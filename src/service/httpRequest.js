import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
//import qs from 'qs';
import { message } from 'antd';
import Loading from '../pages/component/loading'

let loadingCount = 0;

const loadingPlus = () => {
    loadingCount = loadingCount + 1;
    ReactDOM.render(<Loading />, document.getElementById('loading'));
}

const loadingReduce = () => {
    loadingCount = loadingCount - 1;

    if (loadingCount == 0) {
        let result = ReactDOM.unmountComponentAtNode(document.getElementById('loading'));
    }
}

export const postData = (url, params, msg = '请求异常') => {
    loadingPlus();

    return axios.post(url, params).then((res) => {
        loadingReduce();

        if (res.code == 402) {
            //未登录跳转到登录页
        } else {
            return res.data;
        }

    }).catch((err) => {
        loadingReduce();
        console.log(err);
        message.warn(err)
    })
}

export const getData = (url, params, msg = '请求异常') => {
    loadingPlus();

    return axios.get(url, {params: params}).then((res) => {
        loadingReduce();

        if (res.code == 402) {
            //未登录跳转到登录页
        } else {
            return res.data;
        }


    }).catch((err) => {
        loadingReduce();
        console.log(err);
        message.warn(msg)
    })
}
