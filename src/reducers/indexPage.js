import * as TYPE from '../actions/type';

const BlogList = (state = {}, action) => {
    switch (action.type) {
        case TYPE.BLOGLIST:
            return Object.assign({}, state, action.data);
            break;
        case TYPE.HOTBLOGLIST:
            return Object.assign({}, state, action.data);
            break;
        case TYPE.AUTHORLIST:
            return Object.assign({}, state, action.data);
            break;
        default:
            return state
    }
}

export default BlogList;