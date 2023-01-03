<template>
    <div class="flex flex-col justify-center pl-2 space-y-2 ">
        <h1 class="text-4xl font-ubuntu">Welcome To XGAMERtechnologies</h1>
        <h2 class="text-3xl font-ubuntu">
            Your Home For: <span id="expose"></span>
        </h2>
        <p class="text-xl w-[55%] max-w-[55%] font-nunito mt-5 mb-2">
            We have thousands of games for PC, PS2, PSP, PS3 and PS4. We also assemble high end rendering & 
            gaming computers, custom-suited for gamers, animators and graphic designers.  
            <router-link 
                :to="{ name: 'ContactUsView' }"
                class="underline">
                Visit our shop
            </router-link>today or click on any of the links below to shop for hardware,
            software and games, or to contact us.
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
            { text: "Browse Games", routeName: "GamesView", icon: "mdi-gamepad-circle-left" },
            { text: "Shop Products", routeName: "ProductsView", icon: "mdi-shopping" },
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