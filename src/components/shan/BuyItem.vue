<script>

export default {
    components: {

    },
    data() {
        return {
            productName: "",
            singlePrice: null,
            ItemNum: null,
            ItemTotal: null,
            // orderList:JSON.parse(localStorage.getItem(localStorage.getItem("email"))),
            orderList:JSON.parse(localStorage.getItem("searchArr")),
            

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
        <!-- <button type="button" class="btnn" @click="price">xxx</button> -->
        <li v-for="(item, index) in this.orderList" :key="index" class="item-List">
        <div class="item-area-detail">
            <!-- 圖片區 -->
            <div class="photoExhibit">
                <img src="" alt="" class="xxxImg">
            </div>

            <!-- 產品內容區 -->
            <div class="ckeckInfo">
                    <p>商品名稱： <sapn class="text-primary mx-2"> {{ item.itemName }}</sapn></p>
                    
                    <p>單價：<sapn class="text-primary mx-2"> {{ item.itemPrice }}</sapn> </p>
                    
                    <p>賣家：<sapn class="text-primary mx-2"> {{ item.sellAccount }}</sapn></p>
            </div>

            <!-- 產品數量 -->
            <div class="BuyInfoNum text-primary">
                <p>數量</p>
                <p> {{ item.itemNum }}</p>
            </div>
            <!-- 產品總價 -->
            <div class="BuyInfoPrice text-primary">
                <p>總價</p>
                <p>  {{ item.itemNum * item.itemPrice }}</p>
            </div>
        </div>
        
        </li>
    </div>
</template>

<style lang="scss" scoped>
.item-area {
    width: 100%;
    height: 10vw;
    font-size: 2.5vmin;
    margin-top: 15px;
    border-radius: 3px;
    background-color: #efe8e8;
    list-style:none;
    // overflow: auto;

    .item-area-detail {
        width: 100%;
        border-bottom: 2px solid rgb(87, 85, 85);
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;

        .photoExhibit {
            width: 40%;
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
            width: 40%;
        }

        .BuyInfoNum{
            width: 10%;
        }
        
        .BuyInfoPrice{
            width: 10%;
        }
    }
}
</style>