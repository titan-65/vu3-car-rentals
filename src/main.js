import { createApp } from 'vue'
import Layout from './components/layout/Default.vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)

app.use(Layout)
app.mount('#app')