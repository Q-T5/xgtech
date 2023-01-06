import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const useCartStore = defineStore('cart', () => {
    // ref becomes the state property
    const shoppingCart = ref([]);

    // computed becomes the getters
    const cartCount = computed(() => {
        return shoppingCart.value.length;
    });

    const cartItems = computed(() => {
        return shoppingCart.value;
    });

    // function becomes the actions
    function addItemToShoppingCart(pickedItem) {
        shoppingCart.value.push(pickedItem);
        return true;
    }

    return {
        shoppingCart, addItemToShoppingCart, cartCount, cartItems
    }
});