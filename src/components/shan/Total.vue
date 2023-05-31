<script>
export default {
    components: {

    },
    data() {
        return {
            orderList:JSON.parse(localStorage.getItem(localStorage.getItem("email"))),  // 取出與該帳號的訂單資訊
            TotalPrice: 0,                                                              // 宣告整數型態的容器
        }
    },
    methods: {
        fn() {



        }
    },
    // 生命週期
    mounted() {
        // this.fn();
        if(this.orderList === null){
            this.orderList = 0;
        }else{
        for(let i = 0; i < this.orderList.length; i++){
            this.TotalPrice += parseInt(this.orderList[i].itemNum * this.orderList[i].itemPrice);
            }
        }
    }
}



</script>

<template>
    <div class="total-area ">
        <p class="fw-bold">總計 : </p>
        <p class="fw-bold money"> $  {{ this.TotalPrice }} 元</p>
    </div>
</template>

<style lang="scss" scoped>
.total-area {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    font-size: 28px;
    margin-top: 2%;
    border-radius: 3px;
    
    .money{
        margin-left: 5%;
        color: red;
    }
}
</style>