<script>
import BuyItem from "./BuyItem.vue"
import Total from "./Total.vue"
export default {
  components: {
    BuyItem,
    Total
  },
  data() {
    return {
        name:"",        // 與收件人欄位連接
        phone:"",       // 與收件人電話欄位連接
        address:"",      // 與寄件地址欄位連接
    }
  },
  methods: {
    fn() {

    },
    alertmsg() {
      
      // alert("下訂成功!!! \n商品將於三天內出貨，請留意 \n\n (1) 簡訊通知出貨時間  \n (2) 簡訊通知到貨時間 \n (3) 宅急便電話取貨。 \n \n食品為低溫宅配商品，目前為指定18:00送達。  \n如有特殊時間送達需求請下訂24小時內撥電詢問。 \nTel: 06-2345678 (王小姐)");
      // 取得購物車相關資料
      let ary = JSON.parse(localStorage.getItem(localStorage.getItem("email")));
      console.log(ary);

      
      let newaa = [];                               // newaa 用於後續訂單內容轉變
      let sellers = "";                             // sellers 放賣家名稱
      let content = "";                             // content 放訂單內容編號


      let result="";                                // 訂單碼(亂數)
      let charts = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      for(let i =0 ; i< 5; i++){
        result += charts.charAt(Math.floor(Math.random() * charts.length));
      }
      
      for(let i = 0; i < ary.length; i++){          //根據購物車內容多寡填入相對應資訊
        newaa.push(ary[i]);
        
        if(sellers === ""){                         // 使賣家形成字串
          sellers = ary[i].seller;
        }else if(!sellers.includes(ary[i].seller)){
          sellers = sellers.concat(",",ary[i].seller);
        }

        if(content === ""){                         // 使訂單內容編碼形成字串
          content = (result + "-" +(i+1));
        }else{
          content = content.concat("," , (result + "-" +(i+1)));
        }

      }
      
      console.log(content);                         // 訂單內容編碼

      
      let orderObj = {                              // 轉成可以與後端對接的型態
        "order_id":result,                            // 訂單區，填入與資料庫相對應欄位
        "seller_account":sellers,
        "buyer_account":this.name,
        "buyer_phone":this.phone,
        "sent_address":this.address,
        "content":content,
        "order_condition":"未出貨",
      }

      let contentArr = [];                          // 訂單內容區，填入與資料庫相對應欄位

      for(let j = 0; j< newaa.length; j++){
        let orderContent = {
        "num_id":(result + "-" + (j+1)),
        "item_name":newaa[j].text,
        "item_number":newaa[j].number,
        "item_price":newaa[j].price,
        "total_price":newaa[j].total,
        "seller_account":newaa[j].seller
        }
        contentArr.push(orderContent);
      }

      console.log(contentArr);                      // 查看訂單"內容"是否理想
      console.log(orderObj);                        // 查看訂單"資訊"是否理想

      let sentReq = {
        "order":orderObj,
        "contentList":contentArr
      };
      console.log(sentReq);

      fetch("http://localhost:8080/addOrder",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(sentReq)
        })
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data)
        })
        .catch(function(error){
            console.log(error)
        })

      

    }
  },
  // 生命週期
  mounted() {
    // this.fn();


  }
}



</script>

<template>
<div class="carContent">
  <div class="logistic">
      <h3 class="fw-bold">寄送資訊</h3>
      <div class="logistic-detail">

        <!-- 收件人 -->
        <div class="logistic-detail-input">
          <label for="name"> <i class="fa-solid fa-user"> 收件人</i></label>
          <input class="name" id="name" type="text" placeholder=" 請輸入領貨人姓名，e.g. 王曉明"
            onclick="document.getElementById('name').value=''" v-model="this.name">
        </div>

        <!-- 連絡電話 -->
        <div class="logistic-detail-input">
          <label for="phone"> <i class="fa-solid fa-mobile-screen-button"> 連絡電話</i></label>
          <input class="phone" id="phone" type="number" placeholder=" 請輸入連絡電話 ，e.g. 0912345678" v-model="this.phone">
        </div>

        <!-- 寄送地址 -->
        <div class="logistic-detail-input">
          <label for="adress"> <i class="fa-solid fa-map-location-dot"> 寄送地址</i> </label>
          <input class="adress" id="adress" type="text" placeholder=" 請輸入寄送地址(須提供郵遞區號)，e.g. 704-台南市北區 林森路三段" v-model="this.address">
        </div>
      </div>

      <!-- 結帳按鈕 -->
      <div class="bottom">
          <button type="button" class="requestCheckBtn" v-on:click="alertmsg()">
            <i class="fa-regular fa-money-bill-1"> 商品結帳</i>
          </button>
      </div>
  </div>

  <div class="card-area"> 
    <div class="buyinfo">
      <!-- 購買區 -->
      <div class="buyItemBlock">
        <!-- 購物車內容區 -->
        <BuyItem />
      </div>
    </div>
    <!-- 價格區 -->
    <div class="priceinfo"> 
      <!-- 總價計算 -->
      <div class="total">
        <Total />
      </div>
      <div class="tradeWay my-2">
      <!-- 交易方式區域 -->
      <h6 class="fw-bold">交易方式 : </h6>
      <select name="" id="" disabled>
        <option value="0">宅配-貨到付款</option>
      </select>
      </div>
    </div>
    
  </div>
  

</div>
</template>

<style lang="scss" scoped>
.carContent{
  display: flex;
  width: 100%;
  height: 30rem;
}
.card-area {
  width: 70%;
  height: 100%;
  border-radius: 3px;
  background-color: #efe8e8;
  // overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding:0 2%;



  .buyinfo {
    width: 100%;
    height: 30rem;
    flex-direction: column;
    display: flex;
    align-items: center;
    padding-top: 2%;
    .buyItemBlock {
      width: 100%;
      height: 25rem;
      overflow: auto;
      border: 2px solid rgb(87, 85, 85) ;
      border-radius: 5px;
    }
  }

  .priceinfo {
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;

    .total{
      width: 50%;
    }
    .tradeWay {
    width: 50%;
    // height: 60%;
    // border: 1px solid black;
    display: flex;
    justify-content: end;
    padding: 0.5%;

      select {
        font-size: 18px;
        margin: 0 20px;
        width: 14vw;
        height: 2vw;
        text-align: center;
        background-color: rgb(182, 179, 179);
      }

      h6 {
        font-size: 28px;
      }
    }

  

  }
}

.logistic {
    width: 30%;
    height: 100%;
    position: relative;

    .logistic-detail {  
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-items: center;
      color: black;
      border-radius: 3px;
      margin-top: 20px;

      .logistic-detail-input {
        width: 100%;
        margin-bottom: 3px;

        label {
          font-size: 15px;
        }

        input {
          width: 100%;
          height: 2vw;
          font-size: 13px;
          text-align: left;
        }

      }

    }

    .bottom {
  width: 10vw;
  // border: 1px solid black;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  right: 0;
      .requestCheckBtn {
      color: beige;
      transition: 0.5s;
      width: 10vw;
      height: 2vw;
      background-color: #3e3d3d;
      border-radius: 3px;
      border: 1px solid #f9f9f8;

        &:hover{
          cursor: pointer; //會有手手
          background-color: beige;
          color: #544036;
          }

        &:active{
          scale: 0.9; //點擊後縮放
        }
      }
    }

  }


</style>
