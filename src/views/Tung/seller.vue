<script>

</script>


<template>
<div class="area">
<div class="bar">
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                    商品上架
                </button>

                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                    我的商品
                </button>

                <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                    訂單
                </button>
            </div>
        </nav>
</div>


<div class="content">
    <!-- 賣家上架系統 -->
        <div class="sellSystem tab-content" id="nav-tabContent">
            <div class="add tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <div class="sellAddArea">
                    <div class="input">
                    <label for="">商品名稱</label>
                    <p></p>
                    <input type="text" name="" id="">
                    <p></p>
                    <label for="">商品種類</label>
                    <p></p>
                    <input type="text" name="" id="">
                    <p></p>
                    <label for="">採收日期</label>
                    <p></p>
                    <input type="text" name="" id="">

                        <div class="production">
                            <p>產地</p>
                            <label for="">縣</label>
                            <input type="checkbox" >
                            <label for="">市</label>
                            <input type="checkbox" >
                            <p></p>
                            <input type="text" name="" id="" placeholder="ex: 雲林/台南">
                            <p></p>
                            <label for="">市</label>
                            <input type="checkbox" >
                            <label for="">區</label>
                            <input type="checkbox" >
                            <label for="">鄉</label>
                            <input type="checkbox" >
                            <label for="">鎮</label>
                            
                            
                        </div>
                        <button type="button" class="addBtn" id="addBtn">確認上架</button>
                </div>

                <div class="ans">
                    <p>answer</p>
                </div>
                </div>
                
            </div>
<!-- 賣家已上架商品 -->
            <div class="products tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div class="sellProducts">
                    <div class="input">
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
                    </div>
                </div>
                

            </div>
<!-- 賣家訂單 -->
            <div class="order tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                <div class="sellOrder">
                    My order
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
    // height:60vh;
    

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
        
        

        // .tab-pane{
        //     width: 100%;
        //     height: 30rem;
        // }
        
        // .add{
        //     width: 100%;
        //     height: 30rem;
        //     // border: 1px solid black;

        //     .sellAddArea{
        //         display: flex;
        //         .input{
        //             width: 20%;
        //             height: 30rem;
        //             // border: 1px solid black;
        //             // border-right: 1px solid white;
        //             position:relative;

        //             .production{
        //                 margin-top: 10%;
        //             }

        //             .addBtn{
        //                 position: absolute;
        //                 bottom: 0;
        //                 right: 0;
        //             }
        //         }

        //         .ans{
        //             height: 30rem;
        //             width: 80%;
        //         }
        //     }
        // }
            
        // .products{
        //     width: 100%;
        //     height: 30rem;
        //     .sellProducts{
        //         width: 100%;
        //         height: 30rem;
        //         .input{
        //         width: 100%;
        //         height: 10%;
        //         // border: 1px solid black;
        //         display: flex;
        //         justify-content: space-between;
        //         align-items: center;

        //             .classification{
        //                 // margin-left: 5%;
        //                 width: 15%;
        //                 display: flex;
        //                 justify-content: space-between;
        //             }
        //         }

        //         .ans{
        //         width:100%;
        //         height: 90%;
        //         // border: 1px solid white;
        //         }
        //     }
        // }

        }
    }



    


</style>