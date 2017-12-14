import * as TYPE from '../actions/type';

const IndexData = (state = {}, action) => {
    switch (action.type) {
        case TYPE.INDEX:
            return Object.assign({}, state, action.data);
            break;
        default:
            return state
    }
}

export default IndexData;