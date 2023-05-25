<script>
export default{
    data(){
        return{
            isShow: false,
            chartList: [
                {
                    itemId: "9905538",
                    text: "聖女番茄",
                    number: "2",
                    price: "99",
                    total:"198",
                    img: "",
                    content: "橘色品種",
                    seller:"Tung",
                    condition:false

                }, {
                    itemId: "9905539",
                    text: "聖女番茄",
                    number: "3",
                    price: "79",
                    total:"237",
                    img: "",
                    content: "黃色品種",
                    seller:"Tsai",
                    condition:false

                }, {
                    itemId: "9905540",
                    text: "聖女番茄",
                    number: "1",
                    price: "66",
                    total:"66",
                    img: "",
                    content: "紅色品種",
                    seller:"Lin",
                    condition:false
                },{
                    itemId: "9905541",
                    text: "聖女番茄",
                    number: "2",
                    price: "159",
                    total: "318",
                    img: "",
                    content: "金色品種",
                    seller:"Tung", 
                    condition:false
                },
            ],
            isChecked: false,
            tempnum: null,
            refresh: [],
            searchGet: null,
            afterChange: null,
        }
    },
    methods:{
            addItem(index, number){
                console.log(index);                                         // 方便確認自己操作哪個資料
                let arr = JSON.parse(localStorage.getItem("chartList"));    // 取出購物車內容

                let updateItem = {                                          // 更動過的內容視為新陣列
                    itemId: arr[index].itemId,
                    text: arr[index].text,
                    number:number,                                          // number 在外部已連接 input 數字，能隨時更動
                    price: arr[index].price,
                    total:number * arr[index].price,
                    img:arr[index].img,
                    content:arr[index].content,
                    seller:arr[index].seller,
                    condition:arr[index].condition
                }
                console.log(updateItem);                                    // 檢查資料是否更新

                let newArr = [];
                for(let i = 0 ; i < arr.length; i++){                       // 將更動過的內容放回陣列，沒動過的不變
                    if( i === index){
                        newArr.push(updateItem);
                    }
                    newArr.push(arr[i])
                }

                let deleteNum = index+1;
                console.log(arr);                                           // 確認變更前
                console.log(newArr);                                        // 確認變更後
                newArr.splice(deleteNum, 1);                                // 避免無限制增加資料到 localstorage 中，配合迴圈新增一筆也跟著減一筆
                this.chartList = newArr;
                return localStorage.setItem("chartList", JSON.stringify(newArr));
            },
            deleteItem(index){
                let arr = JSON.parse(localStorage.getItem("chartList"));    // 取出購物車內容
                let newArr = [];
                newArr = arr.splice(index,1);                               // 使取出的內容減少，並且是減少所選資料
                return localStorage.setItem("chartList", JSON.stringify(arr));
            },
            clicked(index){
                let arr = JSON.parse(localStorage.getItem("chartList"));
                arr[index].condition = !arr[index].condition;
                console.log( arr[index].condition);
                return localStorage.setItem("chartList", JSON.stringify(arr));
            }
    },
    mounted(){
        // if (localStorage.getItem("chartList") === null) {                   // 假使內容為空，我就新增資料進來，目的使刪除購物車時不會回朔
            localStorage.setItem("chartList", JSON.stringify(this.chartList));
        // }

            this.chartList = JSON.parse(localStorage.getItem("chartList"));
    }
}
</script>

<template>
    <div class="main">

        <ol class="olArea">
            <li v-for="(item, index) in chartList" :key="index" class="item-List">
                    <!-- 商品資訊 -->
                    <div class="information">
                        <input class="checkInput" type="checkbox" @click="clicked(index, number)">
                        <h2>{{ index+1 }}</h2>
                        <p>{{ item.img }} </p>
                        <div class="productContent">
                        <p>商品ID: {{ item.itemId }} </p>
                        <p>品名: {{ item.text }} </p>
                        <p>賣家: {{item.seller}}</p>
                        </div>
                        
                        
                    </div>
                    <!-- 數量區 -->
                    <div class="numberBlock">
                        <div class="price">
                            <p>單價</p>
                            <p>{{ item.price }}</p>
                        </div>
                        <div class="num">
                            <p>數量</p>
                        <input id="numberInput" type="number" v-model="item.number" >
                        </div>
                    </div>

                    <div class="price_content">
                        <p>總價: {{ item.total }} </p>
                        <p>備註: {{ item.content }} </p>
                    </div>
                    <div class="btn-Area">
                        <button class="button-function" @click="addItem(index, item.number)"><i class="fa-solid fa-plus"> 
                                更動數量</i></button>
                        <button class="button-function" @click="deleteItem(index)"><i class="fa-solid fa-x">
                                移除購物車</i></button>
                    </div>
            </li>
        </ol>
    </div>
</template>

<style lang="scss" scoped>
    .main{
        width: 100%;
        background-color: white;
        height: 30rem; 
        overflow: auto;
        color: white;
        font-size: 2.5vmin;
        .olArea{
            width:100%;
            height: 30rem; 
            padding: 0;
        .item-List {
            border: 2px solid white;
            background-color: #666;
            width: 100%;
            height: 10rem;
            display: flex;
            justify-content: space-between;
            align-items: center;     

            .information{
                width: 60%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                .checkInput{
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
                .price{
                    height: 100%;
                }
                .num{
                    height: 100%;
                    #numberInput{
                        width: 4rem;
                        height: 2rem;
                        }

                }
                        
                
                }
            .price_content{
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