import { createApp } from 'vue'
import App from './App.vue'

import {Button} from 'p-ui';
// import 'p-ui/lib/styles/index.css'
// console.log(`PUI`, PUI);

createApp(App)
.use(Button)
.mount('#app')
