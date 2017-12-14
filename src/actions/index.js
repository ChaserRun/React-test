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
