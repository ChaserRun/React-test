import * as  TYPE from './type';
import API from '../service/api';
import * as fetch from '../service/httpRequest';
import { message } from 'antd';

export const technical = (data) => {
    return {
        type: TYPE.TECHNICAL,
        data: data
    }
}