import http from "./http"

// 登录
export const login = data => http.post('user/login', data)

// 获取用户信息
export const userInfo = () => http.get('user/info')

// 车辆列表-查询
export const getCarList = data => http.get('car/list', data)

// 车辆列表-新增车辆
export const add = data => http.post('user/info', data)