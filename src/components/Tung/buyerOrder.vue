<script>
export default{
    data(){
        return{
            buyerOrderList:JSON.parse(localStorage.getItem("buyerOrder")),
            order_num:JSON.parse(localStorage.getItem("buyerOrder")).orderList,
            order_num_content:JSON.parse(localStorage.getItem("buyerOrder")).contentList,
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
        openOrClose(item,index){
            this.openSelect = !this.openSelect
            console.log(this.openSelect)
        }
    },
    mounted(){
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
                <h2 class="condition">訂單狀態：{{elements.order_condition}}</h2>
                <!-- {{ collapseZero }} -->
            
            </button>
            <!-- 更改狀態的按鈕 -->
            <button class="checkBtn" type="button" @click="changeCondition(elements.order_id)" :disabled="elements.order_condition === '已完成'">xxx</button>
        </h2>
        
        <!-- 訂單內容區 -->
            <div :id="'collapse' + [index]" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" v-for="item in this.order_num_content">
                <div class="accordion-body" v-if="elements.order_id.includes(item.num_id.substr(0,5))">
                    <span>編號：{{ item.num_id }}</span>
                    <span>品名：{{ item.item_name }}</span>
                    <span>數量：{{ item.item_number }}</span>
                    <span>單價：{{ item.item_price }}</span>
                    <span>總價：{{ item.total_price }}</span>
                    

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
        height: auto;
        border: 1px solid white;
        // display: inline-block;
        // position: relative;
        // font-weight: 500;
        // font-size: 100px;
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

            .showd{
                opacity: 0.5;
                z-index: -1;
            }
            .condition{
                position: absolute;
                right: 5%;
                margin-left: 20px;
            }

            
        }
        .checkBtn{
            width: 10%;
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