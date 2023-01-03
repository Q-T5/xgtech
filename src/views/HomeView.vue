<template>
    <div class="flex flex-col justify-center pl-2 space-y-2 ">
        <h1 class="text-4xl font-ubuntu">Welcome To XGAMERtechnologies</h1>
        <h2 class="text-3xl font-ubuntu">
            Your Home For: <span id="expose"></span>
        </h2>
        <p class="text-xl w-[55%] max-w-[55%] font-nunito">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis expedita porro eaque at quas laboriosam ipsum, explicabo harum distinctio molestiae omnis in non laudantium ex, aspernatur, sit ullam tempora id?
        </p>
        <div class="w-[50%] max-w-[50%] space-x-2">
            <v-btn 
                v-for="(button, index) in homeButtons" :key="index" :value="index"
                rounded="pill"
                color="purple"
                @click="$router.push({ name: button.routeName })"
                :append-icon="button.icon">
                {{ button.text }}
            </v-btn>
        </div>
    </div>
</template>

<script lang="js">
import TypeWriter from 'typewriter-effect/dist/core'
import { ref } from 'vue'

export default {
    name: "HomeView",
    setup: function() {
        const homeButtons = ref([
            { text: "Games", routeName: "GamesView", icon: "mdi-gamepad-circle-left" },
            { text: "Products", routeName: "ProductsView", icon: "mdi-shopping" },
            { text: "Contact Us", routeName: "ContactUsView", icon: "mdi-phone" },
        ]);

        return {
            homeButtons
        }
    },
    mounted: function() {
        new TypeWriter('#expose', {
            strings: [
                "PC Games",
                "Console Games",
                "Computer Parts",
                "Repairs & Trade-Ins"
            ],
            autoStart: true,
            loop: true,
            cursor: "|"
        });
    }
}
</script>