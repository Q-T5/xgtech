import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// importing for pinia
import { createPinia } from 'pinia'

// importing for vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

// importing for the router
import router from './utils/router'

// setup pinia
const pinia = createPinia();

// setup vuetify
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi'
    },
    theme: {
        defaultTheme: 'dark'
    }
});

createApp(App)
.use(pinia)
.use(vuetify)
.use(router)
.mount('#app')
