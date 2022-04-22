import { createApp } from 'vue'
import App from './App.vue'
import '../style/globals.css'
import route from './route'
import store from './store'
import { currency }  from './currency'

const app = createApp(App)
app.use(route)
app.use(store)
app.mount('#app')
