import { App } from 'vue'
import registerElement from './register-antdv'

export function globalRegister(app: App): void {
  app.use(registerElement)
}
