<script>
import HeaderView from '../../components/peng/Header.vue'
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
        getOrder(){
            fetch("http://localhost:8080/buyer_Order",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(this.user)
        })
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            localStorage.setItem("buyerOrder",JSON.stringify(data))
        })
        .then(function(error){
            console.log(error);
        })
        }
    },
    mounted() {
        if (localStorage.getItem("email") === null) {
            alert("請先登入")
            this.$router.push('/log-in');
        }
    }
}
</script>


<template>
<div class="area">
<div class="bar">
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-trace-tab" data-bs-toggle="tab" data-bs-target="#nav-trace" type="button" role="tab" aria-controls="nav-trace" aria-selected="false">
                    生產履歷
                </button>

                <button class="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                    食譜
                </button>

                <button class="nav-link" id="nav-goodsInfo-tab" data-bs-toggle="tab" data-bs-target="#nav-goodsInfo" type="button" role="tab" aria-controls="nav-goodsInfo" aria-selected="false">
                    商品查詢
                </button>

                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                    購物車
                </button>

                <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                    結帳
                </button>              

                <button class="nav-link" id="nav-goodsInfo-tab" data-bs-toggle="tab" data-bs-target="#nav-goodsInfo" type="button" role="tab" aria-controls="nav-goodsInfo" aria-selected="false">
                    履歷查詢
                </button>

                <button class="nav-link" id="nav-orderform-tab" data-bs-toggle="tab" data-bs-target="#nav-orderformInfo" type="button" role="tab" aria-controls="nav-orderformInfo" aria-selected="false" @click="getOrder">
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

                    <!-- <div class="input">
                        <label for="">商品名稱</label>
                        <input type="text" name="" id="">
                        <label for="">商品種類</label>
                        <input type="text" name="" id="">
                        <label for="">採收日期</label>
                        <input type="text" name="" id="">

                        <div class="production">
                            
                        </div>
                        <button type="button" class="addBtn" id="addBtn">submit</button>
                    </div> -->

                    <!-- <div class="ans">
                    
                    </div> -->
                    <Recipe />
                </div>
                
            </div>

            <!-- 購物車 -->
            <div class="products tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div class="sellProducts">
                    <HeaderView />
                    <ResultView />
                </div>
                

            </div>
            <!-- 結帳 -->
            <div class="order tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                <div class="sellOrder">
                    <Checkout />
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
            <div class="goods tab-pane fade show active" id="nav-trace" role="tabpanel" aria-labelledby="nav-trace-tab">
                <div class="traceFind">
                    <div class="trace"> 
                        <MapView />
                        <!-- <Recipe /> -->
                    </div>
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
                display: flex;
                .input{
                    width: 20%;
                    height: 30rem;
                    // border: 1px solid black;
                    // border-right: 1px solid white;
                    position:relative;

                    .production{
                        margin-top: 10%;
                    }

                    .addBtn{
                        position: absolute;
                        bottom: 0;
                        right: 0;
                    }
                }

                .ans{
                    height: 30rem;
                    width: 80%;
                }
            }
        }
            
        .products{
            width: 100%;
            height:  32.5rem;
            // .sellProducts{
            //     width: 100%;
            //     height: 30rem;
            // }
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
    }


    .sellGoods{
        height: 480px;
        overflow-y: auto;
    }

    .traceFind{
        height: 480px;
        overflow-y: auto;
    }

    


</style>