import request from '@/utils/request'


export function login(username,password) {
    const data = {
        "uid":username,
        "password":password
    }
    return request({
        url: '/login/test0607',
        method: 'post',
        data: data
    })
}

