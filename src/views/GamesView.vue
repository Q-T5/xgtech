<template>
    <div>
        <h1>Games View page</h1>
    </div>
    <div>
        <game-display-comp />
    </div>
</template>

<script lang="js">
import GameDisplayComp from '../components/GameDisplayComp.vue'

export default {
    name: "GamesView",
    components: {
        GameDisplayComp
    },
    setup: function() {
        
    }
}
</script>