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
        <!-- <HeaderView />
        <RouterLink to="/log-in">log</RouterLink> -->
        <hr>
        <HomeBody />
        
    </div>
 
</template>


<style lang="scss" scoped>
</style>
