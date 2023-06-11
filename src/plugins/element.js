import {
    Aside,
    Button,
    Breadcrumb,
    BreadcrumbItem,
    Card,
    Container,
    Dialog,
    Form,
    FormItem,
    Header,
    Input,
    InputNumber,
    Main,
    Menu,
    MenuItem,
    MenuItemGroup,
    Message,
    Select,
    Submenu,
    Table,
    TableColumn,
    Tag
} from 'element-ui';

export function setElement(app) {
    app.use(Aside)
    app.use(Button)
    app.use(Breadcrumb)
    app.use(BreadcrumbItem)
    app.use(Card)
    app.use(Container)
    app.use(Dialog)
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
    app.use(Table)
    app.use(TableColumn)
    app.use(Tag)
    window['$message'] = Message
}
