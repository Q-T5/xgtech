<template>
    <div class="h-screen">
        <div class="h-[5%] flex items-center p-2 justify-around space-x-2">
            <button
                v-for="(category, index) in mainCategories" :key="index" :value="index"
                class="text-lg w-full inline-flex items-center justify-center border-b-[1px] border-solid font-nunito"
                @click="$router.push({ name: category.name })"
                :class="$route.name === category.name ? 'active-service' : ''">
                {{ category.heading }} <v-icon>{{ category.icon }}</v-icon>
            </button>
        </div>
        <div class="h-screen">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="js">
import { ref } from 'vue'

export default {
    name: "ServicesView",
    setup: function() {
        // reactive data
        const mainCategories = ref([
            { heading: "Repairs", icon: "mdi-hammer-screwdriver", name: "RepairsView" },
            { heading: "Trade Ins", icon: "mdi-swap-horizontal", name: "TradeInsView" },
        ]);

        return {
            mainCategories
        }
    },
    mounted: function() {
        this.$router.push({ name: this.mainCategories[0].name });
    }
}
</script>