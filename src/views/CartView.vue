<template>
    <div class="bg-red-500 h-screen">
        <v-btn 
            icon 
            color="purple" 
            @click="$router.go(-1)"
            variant="flat">
            <v-icon>mdi-arrow-left-thin</v-icon>
      </v-btn>
    </div>
</template>

<script lang="js">
export default {
    name: "CartView",
    setup: function() {

    }
}
</script>