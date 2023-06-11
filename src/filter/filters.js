// 日期格式化
function dateFilter(v) {
    return new Date(v).toLocaleString()
}

// 状态格式化
function checkFilter(v) {
    switch (v) {
        case true :
            return '正常'
        case false:
            return '异常'
        default:
            return '异常'
    }
}

export {dateFilter, checkFilter}