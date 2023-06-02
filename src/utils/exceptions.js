const duration = 2000
const [warning, error] = ['warning', 'error']
let type = error

export function onError(err, vm, info) {
  let message;
  switch (err.status) {
    case 401:
      message = '您未获授权！'
      localStorage.clear()
      break
    case 403:
      message = '您没有授权！'
      break
    case 500:
      message = '服务器内部错误'
      break
    default:
      if (err.data) {
        message = err.data.message
      } else {
        message = err.message
      }
  }

  window.$message({type, message, duration})
}

export function onWarn(msg, vm, trace) {
  console.warn(msg, trace)
}

export function codePrompt(msg) {
  window.$message({type, message: msg, duration})
}