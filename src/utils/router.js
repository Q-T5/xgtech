import { createRouter, createWebHistory } from "vue-router"
import HomeView from '/src/views/HomeView.vue'
import GamesView from '/src/views/GamesView.vue'
import ProductsView from '/src/views/ProductsView.vue'
import ServicesView from '/src/views/ServicesView.vue'
import ContactUsView from '/src/views/ContactUsView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: HomeView,
            name: "HomeView"
        },
        {
            path: "/games",
            component: GamesView,
            name: "GamesView"
        },
        {
            path: "/products",
            component: ProductsView,
            name: "ProductsView"
        },
        {
            path: "/services",
            component: ServicesView,
            name: "ServicesView"
        },
        {
            path: "/contact",
            component: ContactUsView,
            name: "ContactUsView"
        }
    ]
});

export default router;