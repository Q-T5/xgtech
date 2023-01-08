<template>
    <div class="h-screen">
        <div class="h-[7%] flex items-center justify-between px-2">
            <div class="flex space-x-2 items-center relative">
                <h1 class="text-3xl font-ubuntu">Games</h1>
                <input 
                    type="text" 
                    class="game-search-box"
                    placeholder="e.g search 'the witcher' or 'most' or '2'"
                    maxlength="35"
                    v-model="searchTerm" />
                <div class="absolute right-0.5 top-1 w-fit h-fit">
                    <v-btn 
                        color="primary"
                        variant="flat"
                        rounded="pill"
                        size="small">search</v-btn>
                </div>
            </div>
            <div class="pr-4">
                <v-btn 
                    icon 
                    color="primary"
                    size="small">
                    <v-icon>mdi-filter-menu</v-icon>
                </v-btn>
            </div>
        </div>
        <div 
            class="h-[93%] max-h-[95%] overflow-scroll grid grid-cols-6 px-2 justify-items-center">
            <div 
                class="w-fit h-fit relative"
                v-for="(game, index) in data" :key="index">
                <game-display-comp :singleGameData="game" />
                <div class="absolute top-[1.7rem] left-2 z-10">
                    <v-btn 
                        icon 
                        color="primary"
                        @click="addToCart(index)">
                        <v-icon>mdi-cart-arrow-down</v-icon>
                    </v-btn>
                </div>
            </div>
            <div class="flex items-center justify-center h-[17.5rem]">
                <v-btn
                    rounded="pill"
                    color="primary"
                    variant="flat"
                    append-icon="mdi-monitor-arrow-down-variant">load more</v-btn>
            </div>
        </div>
    </div>
</template>

<script lang="js">
import { ref, computed, onMounted } from 'vue'
import GameDisplayComp from '../components/GameDisplayComp.vue'
import useGameData from '/src/composables/GameData.js'
import { useCartStore } from '../utils/cartStore'

export default {
    name: "GamesView",
    components: {
        GameDisplayComp
    },
    setup: function(props, context) {
        const searchTerm = ref("");
        // store composable as object
        const gameData = useGameData();
        // use the cart store
        const cartStore = useCartStore();

        // functions
        function addToCart(index) {
            const gameToAdd = gameData.gameData.value[index];
            const filteredGameInfo = {
                title: gameToAdd.title,
                price: gameToAdd.price,
                posterLink: gameToAdd.posterLink,
                gameSize: gameToAdd.gameSize
            }
            // for the store, it returns an object wrapped with 'reactive'
            // so there is no need of saying .value after the store name
            const response = cartStore.addItemToShoppingCart(filteredGameInfo);
            if(response === true) {
                addedToCart();
            }
        }

        // event
        function addedToCart() {
            context.emit("addedToCart")
        }

        // computed properties
        const data = computed(() => {
            return gameData.gameData.value.filter((game) => {
                return game.title.toLowerCase().startsWith(searchTerm.value) || 
                    game.title.toLowerCase().includes(searchTerm.value);
            });
        });

        return {
            gameData, data, searchTerm, cartStore, addToCart, onMounted, addedToCart
        }
    }
}
</script>