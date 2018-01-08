const TOAPI = 'http://123.206.135.206:3007';

const API = {
    //index
    getBlogList: `${TOAPI}/blog/getLists`, //获取博客列表
    getHotBlogList: `${TOAPI}/blog/hotlist`, //获取热门博客
    searchBlog: `${TOAPI}/blog/search`, //搜索博客
}

export default API;