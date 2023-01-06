<template>
    <div class="h-screen flex p-2">
        <div class="w-1/4">
            <v-btn 
                icon 
                color="purple" 
                @click="$router.go(-1)"
                variant="flat">
                <v-icon>mdi-arrow-left-thin</v-icon>
            </v-btn>
        </div>
        <div class="w-2/4 flex flex-col items-center p-2">
            <h1 class="font-ubuntu text-4xl underline">Items in Your Cart</h1>
            <div class="p-2 space-y-2 w-full flex flex-col items-center">
                <div 
                    class="rounded-sm shadow-sm shadow-slate-100/50 w-[75%] border-[1px] p-2 flex space-x-2"
                    v-for="(cartItem, index) in cartStore.cartItems" :key="index">
                    <div class="">
                        <img 
                            :src="cartItem.posterLink" 
                            alt="game-poster"
                            class="h-36 w-[7.5rem] rounded-md" />
                    </div>
                    <div class="flex flex-col font-nunito text-xl justify-center">
                        <h1>Title: {{ cartItem.title }}</h1>
                        <h1>Price: {{ cartItem.price  }}</h1>
                        <h1>Size: {{ cartItem.gameSize }}</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-1/4 h-screen flex flex-col justify-center items-center">
            <v-btn
                color="purple"
                rounded="pill"
                append-icon="mdi-arrow-right"
                variant="flat">
                Proceed To Checkout
            </v-btn>
        </div>
    </div>
</template>

<script lang="js">
import { useCartStore } from '../utils/cartStore'
import { computed } from 'vue'

export default {
    name: "CartView",
    setup: function() {
        const cartStore = useCartStore();

        return {
            cartStore
        }
    }
}
</script>