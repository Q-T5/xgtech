<template>
    <div class="h-screen w-screen">
        <h1>Games View page</h1>
        <div>
            <game-display-comp @showExpandedView="showExpandedView = true" />
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