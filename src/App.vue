<template>
  <div class="w-screen h-screen">
    <nav class="h-[8%] py-2 px-4 flex justify-between items-center shadow-sm">
      <div class="inline-flex space-x-1 items-center">
        <img src="/src/assets/xgamer-logo.svg" alt="xgamer-logo" class="w-8" />
        <h1 class="text-lg font-ubuntu tracking-wide">XGAMERtechnologies</h1>
      </div>
      <div class="flex items-center h-full">
        <v-btn 
          v-for="(route, index) in mainRoutes" :key="index" :value="index"
          rounded="pill"
          :color="$route.name === route.name ? 'purple' : ''"
          @click="$router.push({ name: route.name })"
          :variant="$route.name === route.name ? 'flat' : 'text'">
          {{ route.text }}
      </v-btn>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script lang="js">
import { ref } from 'vue'

export default {
  name: "App",
  setup() {
    // reactive data
    const mainRoutes = ref([
      { name: "HomeView", text: "Home" },
      { name: "GamesView", text: "Games" },
      { name: "ProductsView", text: "Products" },
      { name: "ServicesView", text: "Services" },
      { name: "ContactUsView", text: "Contact Us" },
    ]);

    return {
      mainRoutes
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
