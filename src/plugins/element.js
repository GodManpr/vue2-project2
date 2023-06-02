import {
  Button,
  Form,
  FormItem,
  Input,
  InputNumber,
  Select
} from 'element-ui';

export function setElement(app) {
  app.use(Button)
  app.use(Form)
  app.use(FormItem)
  app.use(Input)
  app.use(InputNumber)
  app.use(Select)
}
