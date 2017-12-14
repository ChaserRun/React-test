import * as  TYPE from './type';
import API from '../service/api';
import * as fetch from '../service/httpRequest';
import { message } from 'antd';

export const tool = (data) => {
    return {
        type: TYPE.TOOL,
        data: data
    }
}