<script>
export default{
    data(){
        return{
            // 回傳的資料存在 localStorage 的 show
            showList:JSON.parse(localStorage.getItem("show")),
            // 取得賣家帳號，並轉成物件供 Api 使用
            user:{
                "sellerAccount":localStorage.getItem("email"),
            },
            seller_num:[],
            seller_num_content:[],
            radio:false,
        }
    },
    methods:{
        check(id){
            let order_id ={
                "order_id":id
            }   

            fetch("http://localhost:8080/shippedOrder",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(order_id)
            })
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                console.log(data);
                alert(data.message);
            })
            .catch(function(error){
                console.log(error)
            })
        },
        showOrder(){
            fetch("http://localhost:8080/seller_Order",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(this.user)
        })
        .then(function(response){
            return response.json();
        })
        .then(data =>{
            this.seller_num = data.orderList;
            this.seller_num_content = data.contentList;   
            console.log(this.seller_num)
        })
        .then(function(error){
            console.log(error);
        })
        },
        chageCondition(id){
            let num_id ={
                "num_id":id
            }
            console.log(num_id)
            fetch("http://localhost:8080/shippedItem",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(num_id)
            })
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                console.log(data);
                alert(data.message);
            })
            .catch(function(error){
                console.log(error)
            })

        },
        conditionBack(id){
            let num_id = {
                "num_id":id
            }
            fetch("http://localhost:8080/callBackItem", {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(num_id)
            })
            .then(response =>{
                return response.json();
            })
            .then(data => {
                console.log(data);
                alert(data.message);
            })
            .catch(error =>{
                console.log(error);
            })
        },
        test(id){
            console.log(id)
            this.radio = !this.radio;
            console.log(this.radio)

        }
    },
    mounted(){

    },
    created(){
        this.showOrder();

    },
    updated(){
        this.showOrder();    
    }
    
}
</script>

<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" rel="stylesheet"  />
<!-- 顯示區域 -->
<div class="showArea">

    <div class="accordion " id="accordionExample">
        <div class="accordion-item title" v-for="(elements,index) in this.seller_num">
        <!-- 訂單編號區 -->
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse' + [index]" aria-expanded="true" :aria-controls="'collapse' + [index]">
                <i class="fa-solid fa-truck-fast Bouncing exits bounceOutRight"></i>
                <h1>訂單編號：{{ elements.order_id }}</h1>
                <div class="buyerData">
                    <h4 class="buyer">收件人：{{elements.buyer}} & 下單帳號：{{elements.buyer_account}}</h4>
                    <h4 class="adress">送件地址：{{elements.sent_address}}</h4>
                </div>  
                <h3 class="condition">訂單狀態：{{elements.order_condition}}</h3>
                
                
            </button>
            <!-- 更改狀態的按鈕 -->
            <button class="checkBtn" type="button" @click="check(elements.order_id)">出貨</button>
        </h2>
        
        <!-- 訂單內容區 -->
            <div :id="'collapse' + [index]" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" v-for="item in this.seller_num_content">
                <div class="accordion-body" v-if="elements.order_id.includes(item.num_id.substr(0,5))">
                    <span>編號：{{ item.num_id }}</span>
                    <span>品名：{{ item.item_name }}</span>
                    <span>數量：{{ item.item_number }}</span>
                    <span>單價：{{ item.item_price }}</span>
                    <span>總價：{{ item.total_price }}</span>

                    <form class="contentRadio">
                    <span>商品狀態：{{ item.item_condition }}</span>
                    <input type="radio" id="radioitem True" :value="true" name="option" @change="chageCondition(item.num_id)">
                    <label for="itemTrue">已出貨</label>
                    <input type="radio" id="radioitem False" :value="false" name="option" checked @change="conditionBack(item.num_id)">
                    <label for="itemFalse">未出貨</label>
                    </form>

                </div>
            </div>
        </div>
    </div>


</div>

</template>


<style lang="scss" scoped>
.showArea{
    width:100%;
    height: 30rem;
    background-color: white;
    overflow: auto;

    .title{
        width: 100%;
        height: auto;
        border: 1px solid white;
        color: transparent;
        animation: hue 3s linear infinite;
        background-image: linear-gradient(to right bottom, rgb(255,0,0), rgb(255,128,0), rgb(255,255,0), rgb(0,255,0), rgb(0,255,128), rgb(0,255,255), rgb(0,128,255), rgb(0,0,255), rgb(128,0,255), rgb(255,0,255), rgb(255,0,128));
        -webkit-background-clip: text;

            i{
            animation-duration: 5s;
            animation-iteration-count: 1;
            font-size: 25pt;            
            } 
    .accordion-header{
        width: 100%;
        display: flex;
        
        .accordion-button{
            width: 90%;
            position: relative;
            h1 {
                margin: 0 0;
                color: white;
                background-color: #71c9c9;
                border: 3px solid #888;
                border-radius: 8px;
                font-size: 23px;
                padding: 15px;
            }

            .buyerData{
                display: block;
                width: 50%;
                margin-left: 2vw;
                // border: 1px solid black;
                .buyer{
                    
                }
                .adress{
                }
            }
            .condition{
                position: absolute;
                right: 3%;
                margin-left: 20px;
            }

            
        }
        .checkBtn{
            width: 8%;
            font-size: 15pt;
            background-color: white;
            border: 0.1px solid black;
            box-shadow: 1px 1px 1px ;
            border-radius: 20pt;
        }
    }
        
        span{
            padding: 50px;
            
        }

        .sumbitBtn{
            font-size: 15pt;
            background-color: white;
            border: 0.1px solid black;
            border-radius: 5pt;
        }

        .accordion-body{
            width:100%;
            height: 8rem;
            font-size: 20pt;
        }
        

            @keyframes hue {
                from {
                    filter: hue-rotate(0);
                }

                to {
                    filter: hue-rotate(-360deg);
                }
                }

                .rainbow-text {
                display: inline-block;
                position: relative;
                // font-weight: 500;
                // font-size: 100px;
                color: transparent;
                animation: hue 1.5s linear infinite;
                background-image: linear-gradient(to right bottom, rgb(255,0,0), rgb(255,128,0), rgb(255,255,0), rgb(0,255,0), rgb(0,255,128), rgb(0,255,255), rgb(0,128,255), rgb(0,0,255), rgb(128,0,255), rgb(255,0,255), rgb(255,0,128));
                -webkit-background-clip: text;
                }
    }
    
}

</style>