<script>
// import SearchBar from '../../components/shan/SearchBar.vue'; 不用使用
import layoutView from '../../components/shan/layout.vue';
export default {
    components: {
        layoutView,
        // SearchBar
    },
    data() {
        return {
            searchData: "",


        }
    },
    methods: {

    },
    // 生命週期}
    mounted() {
        // this.fn();


    }
}




</script>


<template>
    <div class="background">
        <!-- <SearchBar/> -->

        <layoutView v-bind:searchResultArrChild="searchResultArr" />
    </div>
</template>


<style lang="scss" scoped>
.background {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    // width: 100vw;
    height: 100vh;
    background: #9ead9a;

}
</style>
