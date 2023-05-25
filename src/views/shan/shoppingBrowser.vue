<script>
// import SearchBar from '../SearchBar.vue';
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
