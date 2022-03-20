import { App } from 'vue'
import { DatePicker, Button, Form, Input, Checkbox } from 'ant-design-vue'

const components = [DatePicker, Button, Form, Input, Checkbox]

export default function (app: App): void {
  for (const component of components) {
    app.use(component)
  }
}
