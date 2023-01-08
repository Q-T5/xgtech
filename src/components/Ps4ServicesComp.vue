<template>
    <div class="h-screen flex flex-col items-center">
        <div>
            <h1 class="font-ubuntu text-3xl">Ps4 Services</h1>
        </div>
        <div class="w-[90%]">
            <table class="w-full">
                <tr class="bg-primary font-nunito text-lg">
                    <th class="table-headers">Number</th>
                    <th class="table-headers">Service Description</th>
                    <th class="table-headers">Minimum Cost(Ksh)</th>
                </tr>
                <tr class="h-8 text-lg" v-for="(service, index) in services" :key="index">
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
    name: "Ps4ServicesComp",
    setup: function() {
        const services = ref([
            { number: 1, service: "Repair Gamepads", cost: "800" },
            { number: 2, service: "Repair PS4 Software Issues", cost: "2500" },
            { number: 3, service: "Repair Overheating and General PS4 Servicing", cost: "2500" },
            { number: 4, service: "Replace Damaged PS4 HDMI Display Port", cost: "4500" },
            { number: 5, service: "Repair PS4 Disk Issues e.g Drive not Reading", cost: "4500" },
            { number: 6, service: "Upgrade/ Replace PS4 Hard Drive(Memory)", cost: "4500" },
            { number: 7, service: "Repair PS3 Failing to Display on Screeen", cost: "6500" },
        ]);

        return {
            services
        }
    }
}
</script>