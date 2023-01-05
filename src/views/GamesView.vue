<template>
    <div class="h-screen">
        <div class="h-[7%] flex items-center justify-between px-2">
            <div class="flex space-x-2 items-center relative">
                <h1 class="text-3xl font-ubuntu">Games</h1>
                <input 
                    type="text" 
                    class="game-search-box"
                    placeholder="e.g the witcher"
                    maxlength="35"
                    v-model="searchTerm" />
                <div class="absolute right-0.5 top-1 w-fit h-fit">
                    <v-btn 
                        color="purple"
                        variant="flat"
                        rounded="pill"
                        size="small">search</v-btn>
                </div>
            </div>
            <div class="pr-4">
                <v-btn 
                    icon 
                    color="purple"
                    size="small">
                    <v-icon>mdi-filter-menu</v-icon>
                </v-btn>
            </div>
        </div>
        <div 
            class="h-[93%] max-h-[95%] overflow-scroll grid grid-cols-6 px-2 justify-items-center">
            <game-display-comp 
                @showExpandedView="showExpandedView = true" 
                v-for="(game, index) in data" :key="index" :value="index"
                :singleGameData="game" />
            <div class="flex items-center justify-center h-[17.5rem]">
                <v-btn
                    rounded="pill"
                    color="purple"
                    variant="flat"
                    append-icon="mdi-monitor-arrow-down-variant">load more</v-btn>
            </div>
        </div>
    </div>
    <teleport to="#games-expanded">
        <game-expanded-comp 
            v-if="showExpandedView"
            @closeExpandedView="showExpandedView = false" />
    </teleport>
</template>

<script lang="js">
import { ref, computed } from 'vue'
import GameDisplayComp from '../components/GameDisplayComp.vue'
import GameExpandedComp from '../components/GameExpandedComp.vue'
import useGameData from '/src/composables/GameData.js'

export default {
    name: "GamesView",
    components: {
        GameDisplayComp, GameExpandedComp
    },
    setup: function() {
        // reactive data
        const showExpandedView = ref(false);
        const searchTerm = ref("");
        // store composable as object
        const gameData = useGameData();

        // computed properties
        const data = computed(() => {
            return gameData.gameData.value.filter((game) => {
                return game.title.toLowerCase().startsWith(searchTerm.value);
            });
        });

        return {
            showExpandedView, gameData, data, searchTerm
        }
    }
}
</script>