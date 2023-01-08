<template>
    <div class="h-screen flex flex-col items-center">
        <div>
            <h1 class="font-ubuntu text-3xl">Ps2 Services</h1>
        </div>
        <div class="w-[90%]">
            <table class="w-full">
                <tr class="bg-primary font-nunito text-lg">
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
    name: "Ps2ServicesComp",
    setup: function() {
        const services = ref([
            { number: 1, service: "Install PS2 Games", cost: "100" },
            { number: 2, service: "Repair/ Replace Power Switch", cost: "1000" },
            { number: 3, service: "Lens Repair", cost: "1500" },
            { number: 4, service: "PS2 USB Chipping", cost: "2000" },
            { number: 5, service: "Repair/ Replace PS2 Motherboard", cost: "4500" },
        ]);

        return {
            services
        }
    }
}
</script>