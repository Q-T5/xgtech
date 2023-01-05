<template>
    <div class="w-48 max-w-fit h-fit flex flex-col items-center mb-5">
        <div class="w-full max-w-full flex flex-wrap">
            <h1 class="font-nunito">{{ singleGameData.title }}</h1>
        </div>
        <div class="relative" @mouseenter="displayOverlay = false" @mouseleave="displayOverlay = true">
            <img 
            :src=singleGameData.posterLink 
            alt="game-poster"
            class="w-[11.5rem] rounded-md h-64 max-h-64" />
            <div class="absolute bottom-1 right-[3px] z-10">
                <v-btn icon color="purple" @click="addToCartEvent">
                    <v-icon>mdi-cart</v-icon>
                </v-btn>
            </div>
            <div 
                class="absolute rounded-md top-0 w-full h-full bg-slate-50/10 flex justify-center items-center"
                :hidden="displayOverlay">
                <v-btn icon color="purple" @click="showExpandedView = true">
                    <v-icon>mdi-arrow-expand</v-icon>
                </v-btn>
            </div>
        </div>
        <div class="flex flex-col w-full font-nunito text-sm">
            <p>Release: {{ singleGameData.releaseDate }}</p>
            <p>Size: {{ singleGameData.gameSize }}</p>
            <p>Cost(Ksh): {{ singleGameData.price }}</p>
        </div>
    </div>
    <teleport to="#games-expanded">
        <game-expanded-comp 
            v-if="showExpandedView === true"
            @closeExpandedView="showExpandedView = false"
            :expandedGameData="singleGameData" />
    </teleport>
</template>

<script lang="js">
import { ref } from 'vue'
import useGameData from '/src/composables/GameData.js'
import GameExpandedComp from '../components/GameExpandedComp.vue'

export default {
    name: "GameDisplayComp",
    components: {
        GameExpandedComp
    },
    props: {
        singleGameData: {
            type: Object,
            default: {}
        }
    },
    setup: function(props, context) {
        const displayOverlay = ref(true);
        // store composable as object
        const gameData = useGameData();
        const showExpandedView = ref(false);

        // events
        function addToCartEvent() {
            context.emit("addToCartEvent");
        }

        return {
            displayOverlay, addToCartEvent, showExpandedView, gameData
        }
    },
}
</script>