<script>
export default {
    data() {
        return {
            account:null,
            isShow: false,
            chartList: [
                {
                    itemId: "9905538",
                    text: "聖女番茄",
                    number: "2",
                    price: "99",
                    total: "198",
                    img: "",
                    content: "橘色品種",
                    seller: "Tung",
                    condition: false

                }, {
                    itemId: "9905539",
                    text: "聖女番茄",
                    number: "3",
                    price: "79",
                    total: "237",
                    img: "",
                    content: "黃色品種",
                    seller: "Tsai",
                    condition: false

                }, {
                    itemId: "9905540",
                    text: "聖女番茄",
                    number: "1",
                    price: "66",
                    total: "66",
                    img: "",
                    content: "紅色品種",
                    seller: "Lin",
                    condition: false
                }, {
                    itemId: "9905541",
                    text: "聖女番茄",
                    number: "2",
                    price: "159",
                    total: "318",
                    img: "",
                    content: "金色品種",
                    seller: "Tung",
                    condition: false
                },
            ],
            isChecked: false,
            tempnum: null,
            refresh: [],
            searchGet: null,
            afterChange: null,
            searchResultArr: [],//資料庫fetch出來之購物車資料
        }
    },
    methods: {
        addItem(index, number) {
            console.log(index);                                         // 方便確認自己操作哪個資料
            let arr = JSON.parse(localStorage.getItem("chartList"));    // 取出購物車內容

            let updateItem = {                                          // 更動過的內容視為新陣列
                itemId: arr[index].itemId,
                text: arr[index].text,
                number: number,                                          // number 在外部已連接 input 數字，能隨時更動
                price: arr[index].price,
                total: number * arr[index].price,
                img: arr[index].img,
                content: arr[index].content,
                seller: arr[index].seller,
                condition: arr[index].condition
            }
            console.log(updateItem);                                    // 檢查資料是否更新

            let newArr = [];
            for (let i = 0; i < arr.length; i++) {                       // 將更動過的內容放回陣列，沒動過的不變
                if (i === index) {
                    newArr.push(updateItem);
                }
                newArr.push(arr[i])
            }

            let deleteNum = index + 1;
            console.log(arr);                                           // 確認變更前
            console.log(newArr);                                        // 確認變更後
            newArr.splice(deleteNum, 1);                                // 避免無限制增加資料到 localstorage 中，配合迴圈新增一筆也跟著減一筆
            this.chartList = newArr;
            return localStorage.setItem("chartList", JSON.stringify(newArr));
        },
        deleteItem(index) {
            let arr = JSON.parse(localStorage.getItem("chartList"));    // 取出購物車內容
            let newArr = [];
            newArr = arr.splice(index, 1);                               // 使取出的內容減少，並且是減少所選資料
            return localStorage.setItem("chartList", JSON.stringify(arr));
        },
        clicked(index) {
            let arr = JSON.parse(localStorage.getItem("chartList"));
            arr[index].condition = !arr[index].condition;
            console.log(arr[index].condition);
            return localStorage.setItem("chartList", JSON.stringify(arr));
        },
        getShoppingCar() {//獲取資料
            let body = {
                "buyerAccount": this.account //需要localstorage資料
            }
            fetch("http://localhost:8080/get_shopping_data", {
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

                    let SearchArr = [];
                    console.log(data);
                    SearchArr = data.Shopping_Detail_List;
                    alert(data.msg);
                    console.log(SearchArr);
                    this.searchResultArr = SearchArr;

                })
        },
        updateData(index) { //modify
            let body = {
                "shoppingCode": this.searchResultArr[index].shoppingNumber,
                "number": this.searchResultArr[index].itemNum,
                "buyerAccount": "A124" //localstorage
            }
            fetch("http://localhost:8080/modi_data", {
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

                    let SearchArr = [];
                    console.log(data);
                    SearchArr = data.Shopping_Detail_List;
                    alert(data.msg);
                    console.log(SearchArr);
                    this.searchResultArr = SearchArr;

                })
                setTimeout(() => {
                    this.getShoppingCar();
                }, 1000);
                
        },
        deleteDate(index){
            
            let body = {
                "shoppingCode": this.searchResultArr[index].shoppingNumber,
                "buyerAccount": this.account
                // "buyerAccount": "A124" //localstorage
            }
            fetch("http://localhost:8080/delete_data", {
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

                    let SearchArr = [];
                    console.log(data);
                    SearchArr = data.Shopping_Detail_List;
                    alert(data.msg);
                    console.log(SearchArr);
                    this.searchResultArr = SearchArr;

                })
                setTimeout(() => {
                    this.getShoppingCar();
                }, 1000);
        }





    },
    mounted() {
        // if (localStorage.getItem("chartList") === null) {   // 假使內容為空，我就新增資料進來，目的使刪除購物車時不會回朔
        // localStorage.setItem("chartList", JSON.stringify(this.chartList));
        // // // }

        // this.chartList = JSON.parse(localStorage.getItem("chartList"));

        // 從 Localstorage 取得值並代入到 帳號
        this.account = localStorage.getItem('email');

        this.getShoppingCar();
    
    }
}
</script>

<template>
    <div class="main" >
        <!-- <button @click="getShoppingCar" v-bind:searchResultArr="searchResultArr">try</button> -->
        <ol class="olArea" >
            <li v-for="(item, index) in searchResultArr" :key="index" class="item-List">
                <!-- 商品資訊 -->
               
                <div class="information">
                    <input class="checkInput" type="checkbox" @click="clicked(index, number)">
                    <h2>{{ index + 1 }}</h2>
                    <p> {{ item.img }} </p>
                    <div class="productContent">
                        <p>商品ID: {{ item.itemId }} </p>
                        <p>品名: {{ item.itemName }} </p>
                        <p>賣家: {{ item.sellAccount }}</p>
                    </div>


                </div>
                <!-- 數量區 -->
                <div class="numberBlock">
                    <div class="price">
                        <p>單價</p>
                        <p>{{ item.itemPrice }}</p>
                    </div>
                    <div class="num">
                        <p>數量</p>

                        <input id="numberInput" type="number" v-model="item.itemNum">
                    </div>
                </div>

                <div class="price_content">
                    <p>總價: {{ item.itemNum * item.itemPrice }} </p>
                    <p>備註: {{ item.discription }} </p>
                </div>
                <div class="btn-Area">
                    <button class="button-function" @click="updateData(index)"><i class="fa-solid fa-plus">
                            更動數量</i></button>
                    <button class="button-function" @click="deleteDate(index)"><i class="fa-solid fa-x">
                            移除購物車</i></button>
                </div>
            </li>
        </ol>
    </div>
</template>

<style lang="scss" scoped>
.main {
    width: 100%;
    background-color: white;
    height: 30rem;
    overflow: auto;
    color: white;
    font-size: 2.5vmin;

    .olArea {
        width: 100%;
<<<<<<< HEAD
        padding: 0;

=======
        background-color: white;
        height: 30rem; 
        overflow: auto;
        color: white;
        font-size: 2.5vmin;
        .olArea{
            width:100%;
            height: 30rem; 
            padding: 0;
>>>>>>> Tung3
        .item-List {
            border: 2px solid white;
            background-color: #666;
            width: 100%;
            height: 10rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .information {
                width: 60%;
                display: flex;
                justify-content: space-around;
                align-items: center;

                .checkInput {
                    width: 30px;
                    height: 30px;
                }
            }

            .numberBlock {
                // flex-direction: column;
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 20%;
                height: 6rem;

                .price {
                    height: 100%;
                }

                .num {
                    height: 100%;

                    #numberInput {
                        width: 4rem;
                        height: 2rem;
                    }

                }


            }

            .price_content {
                flex-direction: column;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 10%;
            }

            .btn-Area {
                box-sizing: content-box;
                flex-direction: column;
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 10%;

                .button-function {
                    margin: 2px;
                    border-radius: 5px;
                    font-size: 2.5vmin;
                    transition: 0.3s;

                    &:hover {
                        background: #6d7c6f;
                        color: #3f4240;
                    }

                    &:active {
                        scale: 0.8;
                    }
                }

            }


        }


    }

}
</style>