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

// custom themes
const customDarkTheme = {
    dark: false,
    colors: {
        background: "#31393F",
        surface: "#31393F",
        primary: "#a00b35",
        secondary: "#92f986",
        error: "#E33544",
        info: "#3D85D6",
        success: "#61EAC8",
        warning: "#F2C26E"
    }
}

const customLightTheme = {
    dark: false,
    colors: {
        background: "#EAE7F3",
        surface: "#EAE7F3",
        primary: "#069e70",
        secondary: "#b2ffdb",
        error: "#EF3966",
        info: "#97DFF2",
        success: "#0F6C48",
        warning: "#F5AA47"
    }
}

// setup vuetify
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi'
    },
    theme: {
        defaultTheme: 'customDarkTheme',
        themes: {
            customDarkTheme: {
                dark: true,
                colors: {
                    background: "#31393F",
                    surface: "#31393F",
                    primary: "#a00b35",
                    secondary: "#92f986",
                    error: "#E33544",
                    info: "#3D85D6",
                    success: "#61EAC8",
                    warning: "#F2C26E"
                }
            },
            customLightTheme: {
                dark: false,
                colors: {
                    background: "#EAE7F3",
                    surface: "#EAE7F3",
                    primary: "#069e70",
                    secondary: "#b2ffdb",
                    error: "#EF3966",
                    info: "#97DFF2",
                    success: "#0F6C48",
                    warning: "#F5AA47"
                }
            }
        }
    }
});

createApp(App)
.use(pinia)
.use(vuetify)
.use(router)
.mount('#app')
