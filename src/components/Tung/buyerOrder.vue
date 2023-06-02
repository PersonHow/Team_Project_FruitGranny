<script>
export default{
    data(){
        return{
            user:{
                "buyerAccount":localStorage.getItem("email"),
            },
            order_num:[],
            order_num_content:[],
            getGoods:false,
            openSelect:false,
        }
    },
    methods:{
        changeCondition(id){
            
            if(window.confirm("有收到貨物了嗎??") == true){
            let order_id ={
                "order_id":id
            }

            fetch("http://localhost:8080/doneOrder",{
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
                alert("感謝您");
            })
            .catch(function(error){
                console.log(error)
            })

            this.getGoods = !this.getGoods;
            console.log(this.getGoods)
        }else{
            alert("再考慮一下");
        }

        },
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
        .then(data =>{
            let ary = [];
            ary = data;
            this.order_num = ary.orderList;
            this.order_num_content = ary.contentList;
        })
        .then(function(error){
            console.log(error);
        })
        }
    },
    mounted(){
    },
    created(){
        this.user;
        this.getOrder();
    },
    updated(){
        // this.getOrder();
        // this.changeCondition();
    }
    }

</script>

<template>
<div class="showArea">
    <div class="accordion " id="accordionExample">
        <div class="accordion-item title" v-for="(elements, index) in this.order_num" >
        <!-- 訂單編號區 -->
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse' + [index]" aria-expanded="true" :aria-controls="'#collapse' + [index]" >
                <i class="fa-solid fa-truck-fast Bouncing exits bounceOutRight"></i>
                <h1>訂單編號：{{ elements.order_id }}</h1>
                <h3 class="condition">訂單狀態：{{elements.order_condition}}</h3>
                <h3 class="address">送件地址：{{elements.sent_address}}</h3>

            
            </button>
            <!-- 更改狀態的按鈕 -->
            <button class="checkBtn" type="button" @click="changeCondition(elements.order_id)" :disabled="elements.order_condition === '已完成'">確認收到貨</button>
        </h2>
        
        <!-- 訂單內容區 -->
            <div :id="'collapse' + [index]" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" v-for="item in this.order_num_content">
                <div class="accordion-body" v-if="elements.order_id.includes(item.num_id.substr(0,5))">
                    <span>編號：{{ item.num_id }}</span>
                    <span>品名：{{ item.item_name }}</span>
                    <span>數量：{{ item.item_number }}</span>
                    <span>單價：{{ item.item_price }}</span>
                    <span>總價：{{ item.total_price }}</span>
                    <form action="" class="detailData">
                        <span>賣家：{{ item.seller_account }}</span>
                        <span>出貨狀況:{{item.item_condition}}</span>
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
    height: 32.5rem;
    background-color: white;
    overflow: auto;

    .title{
        width: 100%;
        height: 60vh;
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
            // border: 0;
            h1 {
                margin: 0 0;
                color: white;
                background-color: #71c9c9;
                border: 3px solid #888;
                border-radius: 8px;
                font-size: 23px;
                padding: 15px;
            }
            .address{
                margin-left: 20px;
            }
            .condition{
                position: absolute;
                right: 5%;
                margin-left: 20px;
            }

            
        }
        .checkBtn{
            margin-left: 10px;
            width: 6%;
            font-size: 15pt;
            border-radius: 50pt;
            border: 0;
            // box-shadow: 3pt 3pt 3pt #71c9c9 ;
            background-color: #71c9c9;

            &:hover{
                background-color:#5a5858;
                color: white;
            }
        }
    }
        
        span{
            padding: 50px;
            
        }

        .accordion-body{
            width:100%;
            height: 5rem;
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