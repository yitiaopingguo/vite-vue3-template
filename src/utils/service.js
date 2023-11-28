import axios from "axios";

let service = axios.create({
    baseURL:"",//相同绝对路径
    timeout: 100000,//超过这么多时间，则请求终止
    headers: {//请求头携带数据的格式
        "Content-Type": "application/json;charset=UTF-8",
        // "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",        
    }
});
// 添加请求拦截器（Interceptors）
service.interceptors.request.use(function (config) {
    // 发送请求之前做写什么
    let token =  localStorage.getItem("token");
    // 如果有
    if(token){
      // 放在请求头（token跟后端沟通，他需要什么该成什么就可以了）
        config.headers.authorization = token;
    }
    return config;
  }, function (error) {
    // 请求错误的时候做些什么
    return Promise.reject(error);
  });
// 添加响应拦截器
service.interceptors.response.use(function (response) {
// 对响应数据做点什么
return response;
}, function (error) {
// 对响应错误做点什么
return Promise.reject(error);
});

export default service;
