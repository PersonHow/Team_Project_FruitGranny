<script>

import layoutCardView from './layoutCard.vue'
export default {
    components: {
        layoutCardView
    },
    data() {
        return {
            searchResultArr: [],
            searchData:null
            // emitIndex: null,
            // getIndex:null
         


        }
    },
    methods: {
        getProductInfo() {
           

            let body = { //產品名稱
                "name": this.searchData
            }

            fetch("http://localhost:8080/search_specific_product", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body)
            })
                .then(response => {
                    //vue不能用fetch+function 要用箭頭
                    //從JSON格式轉回Js物件
                    return response.json()
                })
                .then(data => {


                    console.log(data);
                    this.searchResultArr = data.product_list;
                    
                    console.log(this.searchResultArr);


                })
        },
     
    },
    // 生命週期}
    mounted() {
        
       

    }
}




</script>


<template>
    <div class="search-area">
        <div class="searchbar">
       
            <label for="searchBar">商品</label>
            <input class="searchBar" type="text" name="" id="searchBar" placeholder="請輸入關鍵字搜尋"
                v-model="this.searchData">
            <button type="button" class="searchReqBtn" @click="getProductInfo">
                <i class="fa-solid fa-magnifying-glass">搜尋</i>
            </button>
            <!-- <button type="button" class="searchReqBtn" @click="">
                <i class="fa-solid fa-pen-to-square">購物車</i> -->
                
            <!-- </button> -->
        </div>



    </div>

    <div class="background-layout">
      
        <layoutCardView v-for="(item, index) in searchResultArr" 
            v-bind:searchResultcode="item.hsCode"
            v-bind:selleraccount="item.sellerAccount" 
            v-bind:date="item.date" 
            v-bind:description="item.description"
            v-bind:name="item.name" v-bind:number="item.number" v-bind:place="item.place" v-bind:price="item.price"
            v-bind:type="item.type" 

           
         
              />
              <!-- @click="setShoppingList()" -->  
            
          
        
    </div>
</template>


<style lang="scss" scoped>
.background-layout {
    flex-wrap: wrap;
    display: flex;
    justify-content: left;
    align-items: center;
    border-radius: 5px;
    width: 65vw;
    height: 80vh;
    background: #ffffff;
    overflow-y: auto;


}


.search-area {

    margin-bottom: 10px;
}

.searchbar {
    width: 65vw;
    height: 3.5vw;
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    border-radius: 20px;
    border: 2px solide rgb(45, 50, 46);
    
    .searchBar{
        outline:none;
    }

}

label {
    width: 100px;
    padding: 15px;
    color:rgb(88, 161, 62);
    border-radius: 16px;
    font-weight: bold;
    font-size: 24px;
    // margin-right: 30px;
}

input {
    text-align: center;
    border: none;
    width: 50vw;
    height: 2vw;
    // margin-right: 50px;
}

.searchReqBtn {
    background-color: rgb(67, 90, 72);
    border-radius: 16px;
    color: rgb(223, 226, 224);
    transition: 0.6s;
    width: 120px;
    padding: 6px;
    margin-left: 15px;
}

.searchReqBtn:hover {
    background-color: rgb(253, 253, 253);
    color: rgb(72, 78, 74);
    scale: 1.2;
}

.searchReqBtn:active {
    scale: 0.9;
}
</style>
