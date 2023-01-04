<template>
    <div class="h-screen flex flex-col items-center">
        <div>
            <h1 class="font-ubuntu text-3xl">Psp Services</h1>
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
    name: "PspServicesComp",
    setup: function() {
        const services = ref([
            { number: 1, service: "Install PSP Games", cost: "100" },
            { number: 2, service: "PSP Games Chipping", cost: "500" },
            { number: 3, service: "Repair Charging Problems", cost: "1500" },
            { number: 4, service: "Repair/ Replace Analog Button", cost: "1500" },
            { number: 5, service: "Repair/ Replace Broken PSP Screen", cost: "1500" },
            { number: 6, service: "Motherboard Replacement", cost: "4500" },
        ]);

        return {
            services
        }
    }
}
</script>