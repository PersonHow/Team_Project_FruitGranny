<script>
import BuyItem from "./BuyItem.vue"
export default {
    components: {

    },
    data() {
        return {
            TotalPrice: null
        }
    },
    methods: {
        fn() {



        }
    },
    // 生命週期
    mounted() {
        // this.fn();


    }
}



</script>

<template>
    <div class="total-area ">
        <div class="total-area-detail">

            <p class="fw-bold">總計 : </p>
            <div class="TotalPriceArea text-danger">
                <p class="fw-bold"> 999 {{ TotalPrice }}</p>

            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.total-area {

    display: flex;
    justify-content: end;
    align-items: center;
    width: 81%;
    height: 12vh;
    font-size: 14px;
    // margin-top: 30px;

    border-radius: 3px;
    background-color: #efe8e8;
    margin-bottom: -31px;
    margin-right: 3px;

    // position: relative;
    // left:-10px;
    // overflow: auto;
    .total-area-detail {
        width: 40vw;
        display: flex;
        justify-content: center;
        align-items: center;
        // margin-right: 1px;
    }

    .TotalPriceArea {
        p {
            position: relative;
            left: 132px;
        }
    }
}
</style>