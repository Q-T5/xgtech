<template>
    <div class="flex justify-center items-center py-2 space-x-2">
        <h1 class="text-xl font-ubuntu">I Want Service for My: </h1>
        <v-btn-toggle
            rounded="xl">
            <v-btn 
                v-for="(comp, index) in components" :key="index" :value="index"
                @click="currentComponent = comp.component"
                variant="flat"
                :color="currentComponent === comp.component ? 'purple' :  ''">
                {{ comp.text }}
            </v-btn>
        </v-btn-toggle>
    </div>
    <div>
        <component :is="currentComponent" />
    </div>
</template>

<script lang="js">
import { ref } from 'vue'
import PspServicesComp from '/src/components/PspServicesComp.vue'
import Ps2ServicesComp from '/src/components/Ps2ServicesComp.vue'
import Ps3ServicesComp from '/src/components/Ps3ServicesComp.vue'
import Ps4ServicesComp from '/src/components/Ps4ServicesComp.vue'

export default {
    name: "RepairsView",
    components: {
        PspServicesComp, Ps2ServicesComp, Ps3ServicesComp, Ps4ServicesComp
    },
    setup: function() {
        const currentComponent = ref("psp-services-comp");
        const components = ref([
            { text: "PSP", component: "psp-services-comp" },
            { text: "PS2", component: "ps2-services-comp" },
            { text: "PS3", component: "ps3-services-comp" },
            { text: "PS4", component: "ps4-services-comp" },
        ])

        return {
            currentComponent, components
        }
    }
}
</script>