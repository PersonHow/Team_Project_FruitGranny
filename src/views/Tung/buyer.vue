<script>
import { RouterLink, RouterView } from 'vue-router';
import HeaderView from '../../components/peng/Header.vue';
import ResultView from "../../components/peng/ResultView.vue";
import Purchase from "../../components/peng/Purchase.vue";
import Recipe from "../zhang/Recipe.vue";
import Checkout from "../shan/Checkout.vue";
import ShoppingBrowser from "../shan/shoppingBrowser.vue";
import MapView from "../shan/map.vue";
import buyerOrder from "../../components/Tung/buyerOrder.vue";
export default{
    data(){
        return{
            user:{
                "buyerAccount":localStorage.getItem("email"),
            },
        }
    },
    components:{
        HeaderView,
        ResultView,
        Purchase,
        Recipe,
        Checkout,
        ShoppingBrowser,
        MapView,
        buyerOrder,
    },
    methods:{
    },
    mounted() {
        if (localStorage.getItem("email") === null) {
            alert("請先登入")
            this.$router.push('/log-in');
        }
    },
    created(){
        
    },
    updated(){
        
    }
}
</script>


<template>
<div class="area">
<div class="bar">
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <!-- 生產履歷(佩珊) -->
                <button class="nav-link active" id="nav-trace-tab" data-bs-toggle="tab" data-bs-target="#nav-trace" type="button" role="tab" aria-controls="nav-trace" aria-selected="false">
                    生產履歷
                </button>

                <!-- 食譜 (曉惠)-->
                <button class="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                    食譜
                </button>
                
                <!-- 商品查詢(雨欣、佩珊) -->
                <button class="nav-link" id="nav-goodsInfo-tab" data-bs-toggle="tab" data-bs-target="#nav-goodsInfo" type="button" role="tab" aria-controls="nav-goodsInfo" aria-selected="false">
                    商品查詢
                </button>

                <!-- 訂單(人豪) -->
                <button class="nav-link" id="nav-orderform-tab" data-bs-toggle="tab" data-bs-target="#nav-orderformInfo" type="button" role="tab" aria-controls="nav-orderformInfo" aria-selected="false" >
                    訂單
                </button>
                
            </div>
        </nav>
    </div>


<div class="content">

    <!-- 食譜 -->
        <div class="sellSystem tab-content" id="nav-tabContent">
            <div class="add tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <div class="sellAddArea">
                    <Recipe />
                </div>
                
            </div>

            <!-- 商品查詢 -->
            <div class="goods tab-pane fade" id="nav-goodsInfo" role="tabpanel" aria-labelledby="nav-goodsInfo-tab">
                <div class="sellGoods">
                    <div class="search"> 
                        <ShoppingBrowser />
                    </div>
                </div>
            </div>    
            
            <!-- 生產履歷 -->
            <div class="trace tab-pane fade show active" id="nav-trace" role="tabpanel" aria-labelledby="nav-trace-tab">
                <div class="traceFind">
                    <div class="trace"> 
                        <MapView />
                    </div>
                </div>
            </div>  
            
            <!-- 訂單 -->
            <div class="orderform tab-pane fade" id="nav-orderformInfo" role="tabpanel" aria-labelledby="nav-orderformInfo-tab">
                <div class="orderformDiv">
                    <buyerOrder />
                </div>
            
            </div>
        </div>
        
    </div>
<!-- content尾巴 -->
</div>


</template>

<style lang="scss" scoped>
.area{
    width:100%;
    height:50%;
    

    .bar{
        width:100%;
        height: 3rem;
        background-color: white;
    }
    .content{
        width: 100%;
        height: 32.5rem;
        background-color: rgba(138, 173, 238, 0.6);
        // border: 1px solid black;
        
        

        .tab-pane{
            width: 100%;
            height: 30rem;
        }
        
        .add{
            width: 100%;
            height: 30rem;
            // border: 1px solid black;

            .sellAddArea{
                width: 100%;
                height: 32.5rem;
                display: flex;
                // border: 1px solid black;                
                }

            }
        }

        .order{
            width: 100%;
            height:  32.5rem;
            background-color: #efe8e8;


            .sellOrder{
                width: 100%;
                height:  32.5rem;
                background-color: #efe8e8;
                // overflow: auto;
            }
        }
        }
    


    .sellGoods{
        height: 32.5rem;
        overflow-y: auto;
    }

    .traceFind{
        height: 480px;
        overflow-y: auto;
    }

    .orderformDiv{
        height: 32.5rem;
        width: 100%;
        overflow: auto;
    }
    


</style>