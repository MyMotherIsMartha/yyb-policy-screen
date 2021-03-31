import axios from 'axios'
import {encodeAES,decodeAES} from "../utils/crypto"
import store from '../store'


axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const service = axios.create({
    // baseURL: "http://10.68.159.72/baseAPI",
    baseURL: "http://10.68.201.183/baseAPI",
    timeout: 10000
})

service.interceptors.request.use(config => {
        if (store.getters.token.length>5) {
            config.headers['token'] = store.getters.token;
        }
        if (!config.noEncode) {
            config.data = {"encryptStr":encodeAES(config.data)};
        }
        return config;
    },error => {
        console.log('err' + error);
        Promise.reject(error);
    })

service.interceptors.response.use(res =>{
        // console.log("response:");
        // console.log(res);
        const code = res.data.code;
        if (code === 200) {
            return decodeAES(res.data.data);
        }
        else 
            return res.data;
    },error =>{
        console.log('err' + error);
        return Promise.reject(error);
    })

export default service