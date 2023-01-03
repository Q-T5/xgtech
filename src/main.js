import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './utils/router'

// setup pinia
const pinia = createPinia();

// setup vuetify
const vuetify = createVuetify({
    components,
    directives
});

createApp(App)
.use(pinia)
.use(vuetify)
.use(router)
.mount('#app')
