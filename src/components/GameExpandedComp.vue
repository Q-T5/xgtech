<template>
    <div class="fixed top-0 left-0 z-20 backdrop-blur-2xl w-full h-screen flex flex-col p-2">
        <div class="flex justify-between p-2 h-[8%]">
            <h1 class="font-ubuntu text-3xl">{{ expandedGameData.title }}</h1>
            <v-btn 
                rounded="pill"
                color="primary"
                append-icon="mdi-close"
                variant="flat"
                @click="closeExpandedView">Close</v-btn>
        </div>
        <div class="flex p-2 space-x-2 h-[92%]">
            <div class="flex flex-col space-y-2 w-[42.5%]">
                <h1 class="text-2xl font-ubuntu">Game Trailer</h1>
                <iframe width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/c0i88t0Kacs?start=15" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    class="border-2 rounded-md bg-slate-500 shadow-md shadow-slate-500/50"></iframe>
                <div class="font-nunito text-xl flex flex-col space-y-1 w-[85%] flex-wrap">
                    <h1>Price(Ksh): {{ expandedGameData.price }}</h1>
                    <h1>Release Date: {{ expandedGameData.releaseDate }}</h1>
                    <h1>Game Size: {{ expandedGameData.gameSize }}</h1>
                    <h1>Genre: {{ expandedGameData.genre }}</h1>
                    <h1>Minimum Requirements: {{ expandedGameData.minimumRequirements }}</h1>
                </div>
            </div>
            <v-divider vertical></v-divider>
            <div class="w-[28.8%] flex flex-col justify-between h-full">
                <div class="h-[90%] flex flex-col">
                    <h1 class="text-2xl font-ubuntu">Comments</h1>
                    <div class="h-full overflow-y-scroll flex flex-col space-y-4">
                        <div 
                            class="w-full border-b-[1px] h-12 font-nunito"
                            v-for="(comment, index) in expandedGameData.comments" :key="index">
                            <h1>{{ comment.name }}</h1>
                            <p>
                                {{ comment.comment }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="h-[10%] flex items-center justify-between">
                    <input 
                        type="text"
                        placeholder="Comment"
                        maxlength="200"
                        v-model="comment"
                        class="comment-box" />
                    <v-btn 
                        icon="mdi-comment-plus"
                        rounded="pill"
                        variant="flat"
                        color="primary"
                        size="small"></v-btn>
                </div>
            </div>
            <v-divider vertical></v-divider>
            <div class="w-[28.8%] p-2">
                <h1 class="text-2xl font-ubuntu">Similar Games</h1>
            </div>
        </div>
    </div>
</template>

<script lang="js">
import { ref } from 'vue'

export default {
    name: "GameExpandedComp",
    props: {
        expandedGameData: {
            type: Object,
            default: {}
        }
    },  
    setup: function(props, context) {
        // reactive data
        const comment = ref("");
        // events
        function closeExpandedView() {
            context.emit("closeExpandedView");
        }

        return {
            closeExpandedView, comment
        }
    }
}
</script>