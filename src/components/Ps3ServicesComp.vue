<template>
    <div class="h-screen flex flex-col items-center">
        <div>
            <h1 class="font-ubuntu text-3xl">Ps3 Services</h1>
        </div>
        <div class="w-[90%]">
            <table class="w-full">
                <tr class="bg-purple-700 font-nunito text-lg">
                    <th class="table-headers">Number</th>
                    <th class="table-headers">Service Description</th>
                    <th class="table-headers">Minimum Cost(Ksh)</th>
                </tr>
                <tr class="table-detail-row" v-for="(service, index) in services" :key="index">
                    <td class="text-center"> {{ service.number }} </td>
                    <td> {{ service.service }}</td>
                    <td class="text-center"> {{ service.cost }}</td>
                </tr>
        </table>
        </div>
    </div>
</template>

<script lang="js">
import { ref } from 'vue'

export default {
    name: "Ps3ServicesComp",
    setup: function() {
        const services = ref([
            { number: 1, service: "Repair Gamepads e.g. Replace Analog Button", cost: "500" },
            { number: 2, service: "Install PS3 Games", cost: "500" },
            { number: 3, service: "PS3 Chipping and Jail-Breaking", cost: "1500" },
            { number: 4, service: "Replace/ Repair PS3 Lens", cost: "5300" },
            { number: 5, service: "Repair PS3 Power Problems", cost: "4500" },
            { number: 6, service: "Repair PS3 Failing to Display on Screeen", cost: "6500" },
            { number: 7, service: "Repair PS3 Motherboard", cost: "7500" },
        ]);

        return {
            services
        }
    }
}
</script>