<script>
import { RouterLink, RouterView } from 'vue-router';
import HeaderView from "./components/tsai/Header.vue";
import HomeBody from "./components/tsai/HomeBody.vue";
export default {
    components: {
        HeaderView,
        HomeBody
    },
    data(){
        return{
        }
    },
    methods: {
    }

  }

</script>


<template>
    <div>
        <HeaderView />
        <div class="downView">
            <RouterView />
        </div>
    </div>

</template>


<style lang="scss" scoped>
    .downView{
        display: flex;
        justify-content: center;
        padding: 30px 70px;
        background-color: #cfcece;
    }
</style>
