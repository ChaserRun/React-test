import * as TYPE from '../actions/type';

const ToolData = (state = {}, action) => {
    switch(action.type) {
        case TYPE.TOOL:
            return Object.assign({}, state, action.data);
            break;
        default:
            return state;
    }
}

export default ToolData;