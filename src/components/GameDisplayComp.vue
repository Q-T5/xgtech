<template>
    <div class="w-48 max-w-fit h-fit flex flex-col items-center">
        <div class="w-full max-w-full flex flex-wrap">
            <h1 class="font-nunito">The Witcher</h1>
        </div>
        <div class="relative" @mouseenter="displayOverlay = false" @mouseleave="displayOverlay = true">
            <img 
            src="/src/assets/witcher.jpg" 
            alt="game-poster"
            class="w-48 rounded-md" />
            <div class="absolute bottom-1 right-[3px] z-10">
                <v-btn icon color="purple" @click="addToCartEvent">
                    <v-icon>mdi-cart</v-icon>
                </v-btn>
            </div>
            <div 
                class="absolute rounded-md top-0 w-full h-full bg-slate-50/10 flex justify-center items-center"
                :hidden="displayOverlay">
                <v-btn icon color="purple" @click="showExpandedView">
                    <v-icon>mdi-arrow-expand</v-icon>
                </v-btn>
            </div>
        </div>
        <div class="flex flex-col w-full font-nunito text-sm">
            <p>Release: 2021-05-31</p>
            <p>Size: 20GiB</p>
            <p>Cost(Ksh): 7800.00</p>
        </div>
    </div>
</template>

<script lang="js">
import { ref } from 'vue'

export default {
    name: "GameDisplayComp",
    setup: function(props, context) {
        const displayOverlay = ref(true);

        // events
        function addToCartEvent() {
            context.emit("addToCartEvent");
        }

        function showExpandedView() {
            context.emit("showExpandedView");
        }

        return {
            displayOverlay, addToCartEvent, showExpandedView
        }
    }
}
</script>