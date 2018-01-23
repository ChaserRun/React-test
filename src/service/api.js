const TOAPI = 'http://123.206.135.206:3007';

const API = {
    //index
    getBlogList: `${TOAPI}/blog/getLists`, //获取博客列表
    getHotBlogList: `${TOAPI}/blog/hotlist`, //获取热门博客
    searchBlog: `${TOAPI}/blog/search`, //搜索博客
    getAuthorList: `${TOAPI}/blog/author`, //获取作者列表

    //blog detail
    getBlogContent: `${TOAPI}/blog/detail`, //获取博客详情
    getCommentList: `${TOAPI}`, //获取评论列表
}

export default API;