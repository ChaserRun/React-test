import * as TYPE from '../actions/type';

const BlogContent = (state = {}, action) => {
    switch (action.type) {
        case TYPE.BLOGCONTENT:
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

export default BlogContent;