<script>
import HeaderView from '../../components/peng/Header.vue'
import ResultView from "../../components/peng/ResultView.vue";
import Purchase from "../../components/peng/Purchase.vue";
import Recipe from "../zhang/Recipe.vue";
import Checkout from "../shan/Checkout.vue"
export default{
    components:{
        HeaderView,
        ResultView,
        Purchase,
        Recipe,
        Checkout
    }
}
</script>


<template>
<div class="area">
<div class="bar">
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                    食譜
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
            </div>
        </nav>
</div>


<div class="content">

    <!-- 食譜 -->
        <div class="sellSystem tab-content" id="nav-tabContent">
            <div class="add tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
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
                    <!-- <div class="input">
                        <div class="classification">
                            <button type="button"> 蔬菜 </button>
                            <button type="button"> 水果 </button>
                        </div>
                        <div class="search">
                            <input type="text" placeholder="搜尋產品">
                            <button type="button" id="productSearch">Search</button>
                        </div>
                    </div>
                    <div class="ans">
                    ~~~
                    </div> -->
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
            <!-- 履歷查詢 -->
            <div class="goods tab-pane fade" id="nav-goodsInfo" role="tabpanel" aria-labelledby="nav-goodsInfo-tab">
                <div class="sellGoods">
                    <div class="search">
                            <input type="text" placeholder="搜尋產品">
                            <button type="button" id="productSearch">Search</button>
                    </div>
                    goods
                </div>
            

            </div>
        </div>

    

<!-- content尾巴 -->
</div>





<!-- area尾巴 -->
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
        height: 30rem;
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
            height: 30rem;
            .sellProducts{
                width: 100%;
                height: 30rem;
                .input{
                width: 100%;
                height: 10%;
                // border: 1px solid black;
                display: flex;
                justify-content: space-between;
                align-items: center;

                    .classification{
                        // margin-left: 5%;
                        width: 15%;
                        display: flex;
                        justify-content: space-between;
                    }
                }

                .ans{
                width:100%;
                height: 90%;
                // border: 1px solid white;
                }
            }
        }

        .order{
            width: 100%;
        }
        }
    }



    


</style>