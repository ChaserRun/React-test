import {combineReducers} from 'redux';

import IndexData from './indexPage';
import TechnicalStationData from './technicalStation';
import ToolData from './tool';

const Reducers = combineReducers({
    IndexData,
    TechnicalStationData,
    ToolData
});

export default Reducers;