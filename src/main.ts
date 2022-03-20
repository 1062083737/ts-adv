import { createApp } from 'vue'
import { globalRegister } from './globel'
// import '@/service/service-demo'
import 'normalize.css'
import './assets/css/index.css'

import App from './App.vue'

import router from './router'
import store from './store'
import yuuRequset from './service'

const app = createApp(App)

app.use(globalRegister)
app.use(router)
app.use(store)

app.mount('#app')

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

yuuRequset
  .requset<DataType>({
    method: 'post',
    url: '/login',
    data: {
      name: 'codertest',
      password: '123456'
    },
    interceptors: {
      requestInterceptor: (config) => {
        console.log('请求单独拦截')
        return config
      }
    }
  })
  .then((res) => {
    console.log(res)
  })
