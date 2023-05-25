<script>
export default {
    components: {

    },
    data() {
        return {
            orderList:JSON.parse(localStorage.getItem(localStorage.getItem("email"))),  // 取出與該帳號的訂單資訊
            TotalPrice: 0,                                                              // 宣告整數型態的容器
            type:[
                {
                    "name":"水果",
                    "item":[
                        {
                            "fruitname":"香蕉",
                            "dish":["香蕉煎餅","香蕉牛奶","香蕉"]
                        },
                        {
                            "fruitname":"草莓",
                            "dish":["草莓大福","草莓蛋捲","草莓蛋糕"]
                        },
                        {
                            "fruitname":"番茄",
                            "dish":[""]
                        }
                    ]
            },
            
            ]
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
            this.TotalPrice += parseInt(this.orderList[i].total);
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