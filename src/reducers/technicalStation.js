import * as TYPE from '../actions/type';

const TechnicalStationData = (state = {}, action) => {
    switch(action.type) {
        case TYPE.TECHNICAL:
            return Object.assign({}, state, action.data);
            break;
        default:
            return state;
    }
}

export default TechnicalStationData;