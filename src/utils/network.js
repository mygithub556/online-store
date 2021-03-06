import originAxios from 'axios'

function axios(option) {
    const base_url = '接口地址'

    return new Promise((resolver, reject) => {
        originAxios({
            url: base_url + option.url,
            method: option.method || 'get',
            params: option.params || {},
            data: option.data || {}
        }).then(res => {
            if (res.status === 200) {
                resolver(res)
            } else {
                reject(res)
            }
        }).catch(res => {
            reject(res)
        })
    })
}

export default axios