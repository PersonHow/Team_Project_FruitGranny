<script>
import showOrder from '../../components/Tung/showOrder.vue';
export default{
    components:{
        showOrder,
    },
    data() {
        return {
        hs_code:null,
        sellerAccount:null,
        name:null,
        type:null,
        place:null,
        number:null,
        date:null,
        price:null,
        description:null,
        
        searchAllRes:[],
        }
    },
    methods: {

        removeProduct(index){
            let result = this.searchAllRes[index];

            let productData = {
                "hs_code": result.hsCode
            };


            if(confirm("確定下架此商品嗎?")){
                fetch("http://localhost:8080/remove_seller_product", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
                })
                .then(res => res.json())
                .then(data => {
                    alert(data.message);
                    this.searchAllRes.splice(index, 1);

                })
                .catch(error => {
                    
                });
            }
        },

        updateProduct(index){
            let result = this.searchAllRes[index];

            let productData = {
                    "hs_code": result.hsCode,
                    "name":result.name,
                    "type":result.type,
                    "typeOptions":[],
                    "place":result.place,
                    "placeOptions":[],
                    "number":result.number,
                    "date":result.date,
                    "price":result.price,
                    "description":result.description            
            }

            if(confirm("確定修改商品嗎?")){
                fetch("http://localhost:8080/update_product",{
                    method: 'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(productData)
                })
                .then(res => res.json())                
                .then(data => {
                    alert(data.message)
                })

                .catch(error =>{

                })
            }
        },
        

        findSellerAllProduct(){
            let productData = {
                "seller_account":this.sellerAccount
            }
            fetch("http://localhost:8080/search_seller_product",{
                    method: 'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(productData)
                })
                .then(res => res.json())                
                .then(data => {

                    this.searchAllRes = data.searchAllRes
                    console.log(this.searchAllRes)
                    // alert(data.message)
                })
                
                .catch(error =>{

                })
        },

        generateHsCode(){
            const randomNum1 = Math.floor(Math.random() * 900000) + 100000;
            const randomNum2 = Math.floor(Math.random() * 90000) + 10000;
            return this.sellerAccount ? randomNum2+ '-' + randomNum1 : null;
        },

        async addProduct(){
            // 產生商品編碼
            this.hs_code = this.generateHsCode();
            console.log(this.hs_code)

            // 檢查商品名稱是否已存在
            if(this.searchAllRes.some(product => product.name === this.name)){
                alert("商品已存在")
                return;
            }
            

            let productData = {
                "product_list": [{   
                    "hsCode":this.hs_code,
                    "sellerAccount":this.sellerAccount,
                    "name":this.name,
                    "type":this.type,
                    "typeOptions":[],
                    "place":this.place,
                    "placeOptions":[],
                    "number":this.number,
                    "date":this.date,
                    "price":this.price,
                    "description":this.description            
                }]
            }

            fetch("http://localhost:8080/add_product",{
                    method: 'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(productData)
                })
                .then(res => res.json())                
                .then(data => {
                    alert(data.message)
                    // alert(JSON.stringify(data.product_list[0].name))
                    // console.log(data.product_list[0])
                    // 新增成功清除欄位資料
                    this.name = null;
                    this.type = null;
                    this.place = null;
                    this.number = null;
                    this.date = null;
                    this.price = null;
                    this.description  = null;


                })
                
                .catch(error =>{

                })
        },

    },
    mounted() {

        if (localStorage.getItem("email") === null) {
            alert("請先登入")
            this.$router.push('/log-in');
        }
            this.placeOptions = ['臺北市','新北市','桃園市','臺中市','臺南市','高雄市','宜蘭縣','新竹縣','苗栗縣','彰化縣','南投縣','雲林縣','嘉義縣','屏東縣','花蓮縣','臺東縣','基隆市','新竹市'];

            this.typeOptions = ["蔬菜","水果"];

        // 從 Localstorage 取得值並代入到 賣家帳號
        const saveSellerAccount = localStorage.getItem('email');
        if(saveSellerAccount){
            this.sellerAccount = saveSellerAccount;
        }
    },
}
</script>


<template>
<div class="area">
<div class="bar">
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                    商品上架
                </button>

                <button @click="findSellerAllProduct" class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                    我的商品
                </button>

                <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                    訂單
                </button>
            </div>
        </nav>
</div>


<div class="content">
        <div class="sellSystem tab-content" id="nav-tabContent">
        <!-- 賣家上架系統 -->
            <div class="add tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <form @submit.prevent="addProduct" class="form">
                    <div class="item">
                    <div class="seller_account">
                        <label for="">賣家帳號</label>
                        <p></p>
                        <input type="text" v-model="sellerAccount" readonly>
                    </div>
                    <div class="name">
                        <label for="">產品名稱</label>
                        <p></p>
                        <input type="text" v-model="name">
                    </div>
                    <div class="type">
                        <label for="">產品種類</label>
                        <p></p>
                        <select v-model="type">
                            <option v-for="option in typeOptions" :value="option">{{ option }}</option>
                        </select>
                    </div>
                    </div>
                    <div class="item">
                    <div class="place">
                        <label for="">原生產地</label>
                        <p></p>
                        <select v-model="place">
                            <option v-for="option in placeOptions" :value="option">{{ option }}</option>
                        </select>
                    </div>
                    <div class="amount">
                        <label for="">商品數量</label>
                        <p></p>
                        <input type="text" v-model="number">
                    </div>
                    <div class="date">
                        <label for="">採收日期</label>
                        <p></p>
                        <input placeholder="yyyy-mm-dd" type="date" class="form-control" id="date" name="date" v-model="date">
                    </div>
                    </div>
                    <div class="item">
                    <div class="price">
                        <label for="">產品價格</label>
                        <p></p>
                        <input type="number" v-model="price">
                    </div>
                    <div class="description">
                        <label for="">備註說明</label>
                        <p></p>
                        <input type="text" v-model="description">
                    </div>
                    <div class="addBtn">
                        <button type="sumbit">上架商品</button>
                    </div>
                    </div>
                </form>
            </div>
        <!-- 賣家已上架商品 -->
            <div class="products tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div class="sellProducts">
                    <div class="seller_account">
                        <!-- 搜尋結果 -->
                        <div class="result" >
                            <ul v-for="(result, index) in searchAllRes" :key="result.hsCode">
                                <div class="resultUl">
                                <!-- 多筆渲染 -->
                                <li>商品編碼：{{result.hsCode}}</li>
                                <p></p>
                                <li>商品名稱<p></p><input type="text" v-model="result.name" ></li>
                                <p></p>
                                <li>商品種類<p></p>
                                    <select v-model="result.type">
                                        <option v-for="option in typeOptions" :value="option">{{ option }}</option>
                                    </select>
                                </li>
                                <p></p>
                                <li>原生產地<p></p>
                                    <select v-model="result.place">
                                        <option v-for="option in placeOptions" :value="option">{{ option }}</option>
                                    </select>
                                </li>
                                <p></p>
                                <li>採收日期<p></p><input type="date" class="form-control" id="date" name="date" style="width: 290px; height: 36px;" v-model="result.date"></li>
                                <p></p>
                                <li>產品價格<p></p><input type="text" v-model="result.price"></li>
                                <p></p>
                                <li>產品數量<p></p><input type="text" v-model="result.number"></li>                            
                                <p></p>
                                <li>備註說明<p></p><input type="text" v-model="result.description"></li>
                                <div class="btn">
                                    <button type="button" @click="updateProduct(index)">修改此商品資訊</button>
                                    <button type="button" @click="removeProduct(index)">下架商品</button>
                                </div>
                                <!-- <hr> -->
                            </div>
                            </ul> 
                            <!-- result 結尾 -->
                        </div>
                    </div>
                </div>
            </div>
        <!-- 賣家訂單 -->
            <div class="order tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                <div class="sellOrder">
                    <showOrder />
                </div>
            </div>
        </div>
</div>

    

<!-- content尾巴 -->
</div>





<!-- area尾巴 -->


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
    }

    .form{
        height: 480px;
        overflow-y: auto;
        display: flex;
        background-color: #9ead9a;
        padding: 20px;
        font-family: "Cormorant Garamond", serifc;
        font-weight: bold;
        font-size: 24px;

        .item{
            width: 30%;
            height:100% ;
        }
        input{
            margin-bottom: 30px;
        }
        .hs_code{
            padding: 10px;
        }

        .hs_code{
            input{
                cursor: default;
            }
        }

        .seller_account{
            padding: 10px;
            input{
                cursor:default;
            }
        }
        
        .name{
            padding: 10px;
        }

        .type{
            padding: 10px;
            select{
                width: 298px;
                height: 42px;
                margin-bottom: 30px;
            }
            
        }

        .place{
            padding: 10px;
            select{
                width: 298px;
                height: 42px;
                margin-bottom: 30px;
            }
        }

        .amount{
            padding: 10px;
        }

        .date{
            padding: 10px;
            input{
                width: 290px;
                height: 36px;
            }
        }

        .price{
            padding: 10px;
        }

        .description{
            padding: 10px;
        }

        .addBtn{
            margin-top: 30px;
            padding-left: 95px;
            border: none;
            
            button{
                border: none;
                border-radius: 4px;
                padding: 4px;
                transition: 0.5s;

                &:hover{
                background-color: #1f4d22;
                color: white;
            }
            }

        }
        
    }

    .sellProducts{
        height: 480px;
        overflow-y: auto;
        background-color: #9ead9a;
        font-family: "Cormorant Garamond", serif;
        font-weight: bold;
        font-size: 24px;

        .search{
            padding: 20px;
            
            input{
                cursor: default;
            }
            
            
            


            .btn{
                border: none;
                button{
                    border: none;
                    border-radius: 4px;
                    padding: 4px;
                    font-size: 24px;
                }
            }

        }

        .result{
            padding: 10px;
            display: flex;
            overflow-x: auto;

            .resultUl{
                border: 2pt solid rgb(11, 74, 11);
                border-radius: 5pt;
                padding:5px
            }
            select{
                width: 298px;
                height: 42px;
            }

            ul{
                list-style: none;
            }

            .btn{
                border: none;
                button{
                    border: none;
                    border-radius: 4px;
                    padding: 4px;
                    margin-left: 20px;
                    margin-top: 20px;

                    &:active{
                        scale: 0.9;
                    }
                }
            }
        }
    }
    
        
    }



    


</style>