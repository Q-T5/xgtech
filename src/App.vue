<template>
  <v-app>
    <div class="w-screen h-screen relative">
      <nav class="h-[8%] py-2 px-4 flex justify-between items-center shadow-sm">
        <div class="inline-flex space-x-1 items-center">
          <img src="/src/assets/xgamer-logo.svg" alt="xgamer-logo" class="w-8" />
          <h1 class="text-lg font-ubuntu tracking-wide">XGAMERtechnologies</h1>
          <v-btn @click="toggleTheme">change theme</v-btn>
        </div>
        <div class="flex items-center h-full">
          <v-btn 
            v-for="(route, index) in mainRoutes" :key="index" :value="index"
            rounded="pill"
            :color="$route.name === route.name ? 'primary' : ''"
            @click="$router.push({ name: route.name })"
            :variant="$route.name === route.name ? 'flat' : 'text'">
            {{ route.text }}
          </v-btn>
        </div>
      </nav>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" @addedToCart="cartItems++" />
        </keep-alive>
      </router-view>
      <div 
        class="absolute bottom-2 right-5"
        v-show="$route.name !== 'CartView'">
        <div class="relative">
          <v-btn 
            icon 
            color="primary" 
            @click="displayCart"
            variant="flat">
            <v-icon>mdi-cart</v-icon>
          </v-btn>
        </div>
        <div class="absolute -top-3 -left-2">
          <v-badge
            color="gray"
            :content="cartItems"
            class="font-nunito"
            inline></v-badge>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script lang="js">
import { ref } from 'vue'
import { useTheme } from 'vuetify/lib/framework.mjs';
import router from './utils/router'

export default {
  name: "App",
  setup() {
    // reactive data
    const mainRoutes = ref([
      { name: "HomeView", text: "Home" },
      { name: "GamesView", text: "Games" },
      { name: "ProductsView", text: "Products" },
      { name: "RepairsView", text: "Services" },
      { name: "ContactUsView", text: "Contact Us" },
    ]);
    const cartItems = ref(0);
    // theme changer variable
    const theme = useTheme();

    // functions
    function displayCart() {
      router.push({ name: "CartView" });
    }

    function toggleTheme() {
      if(theme.global.name.value === "customDarkTheme") {
        theme.global.name.value = "customLightTheme";
      } else if(theme.global.name.value === "customLightTheme") {
        theme.global.name.value = "customDarkTheme";
      }
    }

    return {
      mainRoutes, displayCart, cartItems, theme, toggleTheme
    }
  }
}
</script>

<style>
  html {
    overflow: hidden !important;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  html::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
</style>
