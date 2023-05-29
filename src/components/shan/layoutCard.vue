<script>


export default {
    components: {
    },
    data() {
        return {
            searchResult: null,
            account: null,
            addNum:null
        }
    },
    props: [
        "searchResultcode",
        "selleraccount",
        "date",
        "description",
        "name",
        "number",
        "place",
        "price",
        "type",

    ],
    methods: {

        tryAdd() {  //加入購物車
            this.searchResult = this.searchResultcode;
            console.log(this.searchResult);
            let body = {
                "product": this.searchResult,
                "buyerAccount": this.account,
                "number":this.addNum
                // "buyerAccount":"A325" //需要localstorage
            }
            fetch("http://localhost:8080/add_shopping_car", {
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
                    this.searchResultArr = data;
                    alert(data.msg);
                    console.log(this.searchResultArr);
                    this. emitPush();//啟動layout

                })


                
        },
        emitPush(){
            console.log(`AAA`)
            this.$emit("emitPushAdd")
        }


    },
    // 生命週期}
    mounted() {
        // this.fn();
        // 從 Localstorage 取得值並代入到 帳號
        this.account = localStorage.getItem('email');


    }
}




</script>


<template>
    <div class="card">
        <div class="explainAndBtn">
            <!-- <img src="../../../public/shan/img/sweet-potato-600x400.jpg" alt=""> -->
            <div class="explain">
                <!-- <p >編號： {{ searchResultcode }}</p> -->

                <div class="item-content">
                    <p>產品名稱： {{ name }} </p>
                    <p>產品數量： {{ number }} </p>
                </div>
                <div class="item-content">
                    <p>產品分類：{{ type }}</p>
                    <p>產品敘述： {{ description }} </p>
                </div>
                <div class="item-content">
                    <p>產品價格： {{ price }} </p>
                    <p>生產日期： {{ date }} </p>
                    <p>生產產地： {{ place }} </p>
                </div>

                <div class="changeNumandAdd">
                    <label for="addNum">需要加入的數量</label>
                    <input class="addNum" type="number" v-model="addNum">
                    <button type="button" class="addCartBTN" @click="tryAdd">
                        <i class="fa-solid fa-basket-shopping">加入購物車</i>
                    </button>
                </div>

            </div>


        </div>
    </div>
</template>


<style lang="scss" scoped>
.card {
    overflow-y: auto;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items:flex-start;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 10px;
    border-radius: 5px;
    width: 35vw;
    height: 10vw;
    background: #ffffff;
    border: 2px solid #454141;

    img {
        border-radius: 5px;
        width: 180px;
        height: 120px;
        margin-top: 100px;
    }
}

.explainAndBtn {
    // margin-top: 70px;
    flex-direction: column;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items:flex-start;
}

.explain {
    // flex-direction: column;
    display: flex;
    justify-content:flex-end;
    // align-items: center;
    text-align: left;
    margin: 8px 5px;


}

.addCartBTN {
    border-radius: 5px;
    background: #454141;
    color: antiquewhite;
    transition: 1s;
    width: 6vw;
    margin-bottom: 3px;
}

.addCartBTN:hover {
    background: antiquewhite;
    color: #454141;
    scale: 1.1;
}

.addCartBTN:active {
    scale: 0.9;
}

.item-content {
    flex-direction: column;
    display: flex;
    justify-content: center;
    margin: 8px;
    // border:1px solid #454141;
    padding: 5px;

}

.changeNumandAdd {
    padding: 0 5px;
    border: 2px solid #454141;
    border-radius: 5px;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;

    .addNum {
        margin: 10px 0;
        width: 6vw;
    }
}
</style>
