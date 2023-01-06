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
            path: "/xgtech/",
            component: HomeView,
            name: "HomeView"
        },
        {
            path: "/xgtech/games",
            component: GamesView,
            name: "GamesView"
        },
        {
            path: "/xgtech/products",
            component: ProductsView,
            name: "ProductsView",
            children: [
                {
                    path: "/xgtech/products/software",
                    component: () => import("/src/views/subviews/SoftwareView.vue"),
                    name: "SofwareView"
                },
                {
                    path: "/xgtech/products/hardware",
                    component: () => import("/src/views/subviews/HardwareView.vue"),
                    name: "HardwareView"
                }

                // there will be a search functionality but it is not routed
            ]
        },
        {
            path: "/xgtech/services",
            component: ServicesView,
            name: "ServicesView",
            children: [
                {
                    path: "/xgtech/services/repairs",
                    component: () => import("/src/views/subviews/RepairsView.vue"),
                    name: "RepairsView"
                },
                {
                    path: "/xgtech/services/trade-ins",
                    component: () => import("/src/views/subviews/TradeInsView.vue"),
                    name: "TradeInsView"
                },
            ]
        },
        {
            path: "/xgtech/cart",
            component: () => import("/src/views/CartView.vue"),
            name: "CartView"
        },
        {
            path: "/xgtech/contact",
            component: ContactUsView,
            name: "ContactUsView"
        }
    ]
});

export default router;