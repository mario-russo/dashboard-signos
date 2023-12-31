import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

import { Notify, Quasar, Loading } from 'quasar'

import router from './router'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'

// Import Quasar css
// import 'quasar/src/css/index.sass'
import 'quasar/dist/quasar.css'


createApp(App).use(createPinia()).use(router).use(Quasar, {
    plugins: {
        Notify,
        Loading,
    }, // import Quasar plugins and add here
}).mount('#app')
