// 将一级数据初始化为所需数据
export function createTree(pData, data) {
    for (let i = 0; i < pData.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (pData[i].id === data[j].father_id) {
                if (!pData[i].children) {
                    pData[i].children = []
                }
                pData[i].children.push({...data[j]})
            }
        }
        if (pData[i].children) {
            createTree(pData[i].children, data)
        }
    }
}

// 初始化路由数据
export function initRoutes(data, subObj) {
    data.forEach(item => {
        let obj = {
            path: item.menu_url,
            name: item.name,
            meta: {title: item.menu_name},
            component: () => import(`../views/home/${item.component}/index.vue`)
        }

        if (subObj instanceof Array) {
            subObj.push(obj)
        } else {
            if (!subObj.children) {
                subObj.children = []
            }
            subObj.children.push(obj)
        }

        if (item.children) {
            initRoutes(item.children, obj)
        }
    })
}

export function deepClone(dest, obj) {
    let o = dest
    for (let k in obj) {
        if (typeof obj[k] === 'object') {
            o[k] = obj[k].constructor === Array ? [] : {}
            deepClone(o[k], obj[k])
        } else {
            o[k] = obj[k]
        }
    }
    return o
}