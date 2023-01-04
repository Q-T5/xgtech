<template>
    <div class="h-screen">
        <div class="h-[7%] flex items-center justify-between px-2">
            <div class="flex space-x-2 items-center relative">
                <h1 class="text-3xl font-ubuntu">Games</h1>
                <input 
                    type="text" 
                    class="game-search-box"
                    placeholder="Search Game"
                    maxlength="35" />
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
        <div class="h-[93%] max-h-[95%] overflow-scroll grid grid-cols-6 px-2">
            <game-display-comp @showExpandedView="showExpandedView = true" />
            <game-display-comp @showExpandedView="showExpandedView = true" />
            <game-display-comp @showExpandedView="showExpandedView = true" />
            <game-display-comp @showExpandedView="showExpandedView = true" />
            <game-display-comp @showExpandedView="showExpandedView = true" />
            <game-display-comp @showExpandedView="showExpandedView = true" />
            <game-display-comp @showExpandedView="showExpandedView = true" />
            <game-display-comp @showExpandedView="showExpandedView = true" />
            <game-display-comp @showExpandedView="showExpandedView = true" />
            <game-display-comp @showExpandedView="showExpandedView = true" />
            <game-display-comp @showExpandedView="showExpandedView = true" />
            <game-display-comp @showExpandedView="showExpandedView = true" />
            <game-display-comp @showExpandedView="showExpandedView = true" />
            <game-display-comp @showExpandedView="showExpandedView = true" />
            <div class="flex items-center justify-center">
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
import { ref } from 'vue'
import GameDisplayComp from '../components/GameDisplayComp.vue'
import GameExpandedComp from '../components/GameExpandedComp.vue'

export default {
    name: "GamesView",
    components: {
        GameDisplayComp, GameExpandedComp
    },
    setup: function() {
        // reactive data
        const showExpandedView = ref(false);
        
        // functions

        return {
            showExpandedView
        }
    }
}
</script>