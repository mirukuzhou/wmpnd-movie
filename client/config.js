/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
var host = 'https://e7ifnzzv.qcloud.la';

var config = {

    // 下面的地址配合云端 Demo 工作
    service: {
        host,

        // 登录地址，用于建立会话
        loginUrl: `${host}/weapp/login`,

        // 测试的请求地址，用于测试会话
        user: `${host}/weapp/user`,

        // 上传接口
        uploadUrl: `${host}/weapp/upload`,

        // 拉取电影列表
        movieList: `${host}/weapp/movie`,

        // 获取电影详情
        movieDetail: `${host}/weapp/movie/`,

        // 添加影评
        addReview: `${host}/weapp/review`,

        // 获取评影评列表
        reviewList: `${host}/weapp/review/`,

        // 获取我对某部电影的影评
        myReview: `${host}/weapp/review/my/`,

        // 获取评影评详情
        reviewDetail: `${host}/weapp/review/detail/`,

        // 首页影评
        recommendation: `${host}/weapp/recommendation`,

        // 添加到用户收藏列表
        addCollection: `${host}/weapp/collection`,

        // 获取用户列表
        myList: `${host}/weapp/myList`,
    }
};

module.exports = config;
