import {Message, Notification} from "element-ui";
import {onError, onWarn} from "@/utils/exceptions";

export function setConfig(app) {
  app.config.productionTip = false // 阻止生产环境的消息
  app.config.errorHandler = onError
  app.config.warnHandler = onWarn

  app.prototype.$message = Message;
  app.prototype.$notify = Notification;
}