import React from 'react';
import { Spin } from 'antd';
import './index.less';

const Loading = (loading) => {
    return <Spin size="large" spinning={true} className={'loading-spin'}/>
}

export default Loading;