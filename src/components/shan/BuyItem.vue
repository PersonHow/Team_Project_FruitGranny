<script>

export default {
    components: {

    },
    data() {
        return {
            productName: "",
            singlePrice: null,
            ItemNum: null,
            ItemTotal: null
            

        }
    },
    methods: {
        price() {


        }
    },
    // 生命週期
    mounted() {
        // this.fn();


    }
}



</script>

<template>
    <div class="item-area">
        <div class="item-area-detail">

            <div class="photoExhibit">
                <img src="../../../public/shan/img/tomotoFruit.jpg" alt="">
            </div>

            <div class="ckeckInfo">
                <div class="textLayout">
                    <p>商品名稱 :  </p>
                    <p class="text-primary mx-2"> 聖女番茄{{ productName }}</p>
                </div>
                <div class="textLayout">
                    <p>單價 : </p>
                    <p class="text-primary mx-2"> 99 {{ singlePrice }}</p>
                </div>

            </div>

            <div class="BuyInfoNum text-primary">
                <p> * 1 {{ ItemNum }}</p>
            </div>

            <div class="BuyInfoPrice text-primary">
                <p> 99 {{ ItemTotal }}</p>
            </div>
        </div>
        

    </div>
</template>

<style lang="scss" scoped>
.item-area {

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 10vw;
    font-size: 14px;
    margin-top: 15px;
    
    border-radius: 3px;
    border-bottom: 2px solid rgb(87, 85, 85);
    background-color: #efe8e8;
    // overflow: auto;

    .item-area-detail {
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        margin-bottom: 12px;

        .photoExhibit {
            width: 10vw;
            height: 10vw;
            background-repeat: no-repeat;
            background-size: cover;


            img {
                width: 10vw;
                height: 10vw;
                margin-right: 5px;


            }

        }

        .ckeckInfo {
            font-size: 12px;

            flex-direction: column;
            display: flex;
            justify-content: center;


            .textLayout {
                display: flex;
            }
        }


    }
}
</style>