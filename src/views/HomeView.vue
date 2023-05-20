<script>
import { RouterLink, RouterView } from 'vue-router';
import HeaderView from "../components/tsai/Header.vue";
import HomeBody from "../components/tsai/HomeBody.vue";
    export default {
    components: {
        HeaderView,
        HomeBody
    }
    }

</script>


<template>
    <div class="body">
        <hr>
        <HomeBody />
        
    </div>
 
</template>


<style lang="scss" scoped>
</style>
