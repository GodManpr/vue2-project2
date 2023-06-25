import http from "./http"

// 登录
export const login = data => http.post('user/login', data)

// 获取用户信息
export const userInfo = () => http.get('user/info')

// 车辆列表-查询
export const getCarList = data => http.get('car/list', data)

// 车辆列表-新增车辆
export const carSubmit = data => http.post('car/createOrUpd', data)

// 车辆列表-车牌校验
export const numberSingle = data => http.get('car/isExist', data)

// 车辆列表-删除
export const carDel = id => http.delete(`car/delete/${id}`)

// 车辆列表-查看状态正常车牌号
export const getCarNumber = data => http.get('car/list/valid', data)

// 车辆列表-车辆充电-根据车辆ID进行查询
export const getChargeList = data => http.get('charge/list', data)

// 车辆列表-车辆充电-开始充电
export const carCharge = data => http.post('charge/charge', data)

// 权限管理-添加操作员
export const createUser = data => http.post('user/createUser', data)

// 权限管理-操作员列表
export const userList = data => http.get('user/list', data)

// 权限管理-删除操作员
export const removeUser = id => http.delete(`user/removeUser/${id}`)

// 权限管理-查找所有菜单的目录
export const findModules = data => http.get('permission/findModules', data)

// 权限管理-查找所有操作员
export const getOpers = () => http.get('user/opers')
//
// 权限管理-操作员权限-通过操作员id查对应权限
export const findModulesByUid = id => http.get('permission/findModulesByUid', {id})