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
            name: "ProductsView",
            children: [
                {
                    path: "/products/software",
                    component: () => import("/src/views/subviews/SoftwareView.vue"),
                    name: "SofwareView"
                },
                {
                    path: "/products/hardware",
                    component: () => import("/src/views/subviews/HardwareView.vue"),
                    name: "HardwareView"
                }

                // there will be a search functionality but it is not routed
            ]
        },
        {
            path: "/services",
            component: ServicesView,
            name: "ServicesView",
            children: [
                {
                    path: "/services/repairs",
                    component: () => import("/src/views/subviews/RepairsView.vue"),
                    name: "RepairsView"
                },
                {
                    path: "/services/trade-ins",
                    component: () => import("/src/views/subviews/TradeInsView.vue"),
                    name: "TradeInsView"
                },
            ]
        },
        {
            path: "/cart",
            component: () => import("/src/views/CartView.vue"),
            name: "CartView"
        },
        {
            path: "/contact",
            component: ContactUsView,
            name: "ContactUsView"
        }
    ]
});

export default router;