import request from '@/utils/request'


export function lineChart() {
    const data = {
        "area": 0,
        "type": 0,
        "policyType": 0,
        "viewNum": 10
    }
    return request({
        url: '/home/page/appeal/lineChart',
        method: 'post',
        data: data
    })
}

//平台总览
export function ptzl() {
    const data = {
        "area": 0,
        "type": 0,
        "policyType": 0,
        "viewNum": 100000 
    }
    return request({
        url: '/home/page/platform/overView',
        method: 'post',
        data: data
    })
}
//政策总览
export function zczl() {
    const data = {
        "area": 0,
        "type": 0,
        "policyType": 0,
        "viewNum": 100000 
    }
    return request({
        url: '/home/page/policy/overView',
        method: 'post',
        data: data
    })
}

//政策兑付总览(兑现类)
export function zcdf() {
    const data = {
        "area": 0,
        "type": 0,
        "policyType": 0,
        "viewNum": 10 
    }
    return request({
        url: '/home/page/policy/payOrReduce/overView',
        method: 'post',
        data: data,
        noEncode: true
    })
}

//政策兑付总览(减免类)
export function zcdfjm() {
    const data = {
        "area": 0,
        "type": 0,
        "policyType": 1,
        "viewNum": 10 
    }
    return request({
        url: '/home/page/policy/payOrReduce/overView',
        method: 'post',
        data: data,
        noEncode: true
    })
}

//政策发布量
export function zcfbl() {
    const data = {
        "area": 0,
        "type": 0,
        "policyType": 0,
        "viewNum": 10000 
    }
    return request({
        url: '/home/page/policy/releaseCount',
        method: 'post',
        data: data
    })
}

//政策方占比分析
export function zcfzb() {
    const data = {
        "area": 1,
        "type": 0,
        "policyType": 0,
        "viewNum": 10 
    }
    return request({
        url: '/home/page/policy/deptProportion',
        method: 'post',
        data: data
    })
}

//区域兑付
export function zcfblsub() {
    const data = {
        "area": 0,
        "type": 0,
        "policyType": 0,
        "viewNum": 50 
    }
    return request({
        url: '/home/page/policy/releaseCountSub',
        method: 'post',
        data: data
    })
}
//  各区域兑付
export function getAllAreaCash() {
    const data = {
        "area": 0,
        "type": 0,
        "policyType": 0,
        "viewNum": 50 
    }
    return request({
        url: '/home/page/policy/pay/allArea',
        method: 'post',
        data: data
    })
}