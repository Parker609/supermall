// 针对axios，做本地封装，万一axios不好用了，也可以及时更改。

import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    // 请求拦截器
    instance.interceptors.request.use(config=>{
        return config
    },err=>{
        console.log(err)
    })

    // 相应拦截器
    instance.interceptors.response.use(res=>{
        return res
    },err=>{
        console.log(err)
    })

    return instance(config)
}