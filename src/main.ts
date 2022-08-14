import { createApp } from 'vue'
import ElementPlus, {ElMessage} from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.globalProperties.$message = ElMessage
app.use(router)
app.use(ElementPlus)
app.mount('#app')
