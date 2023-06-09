import {
  Aside,
  Button,
  Container,
  Form,
  FormItem,
  Header,
  Input,
  InputNumber,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  Select,
  Submenu
} from 'element-ui';

export function setElement(app) {
  app.use(Aside)
  app.use(Button)
  app.use(Container)
  app.use(Form)
  app.use(FormItem)
  app.use(Header)
  app.use(Input)
  app.use(InputNumber)
  app.use(Main)
  app.use(Menu)
  app.use(MenuItem)
  app.use(MenuItemGroup)
  app.use(Select)
  app.use(Submenu)
}
