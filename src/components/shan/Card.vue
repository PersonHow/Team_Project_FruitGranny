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

    }
  },
  methods: {
    fn() {


    }
  },
  // 生命週期
  mounted() {
    // this.fn();


  }
}



</script>

<template>
  <div class="card-area">
    <div class="buyinfo">
      <!-- <div class="fist">

      </div> -->
      <div class="buyItemBlock">
        <BuyItem v-for="item in [1, 2, 3]" />
      </div>
    </div>
    <div class="priceinfo">
      <Total />
    </div>
    <div class="tradeWay my-2">

      <h6 class="fw-bold">交易方式 : </h6>
      <select name="" id="" disabled>
        <option value="0">宅配-貨到付款</option>
      </select>
    </div>
    <div class="logistic">
      <h6 class="fw-bold">寄送資訊</h6>
      <div class="logistic-detail">

        <div class="logistic-detail-input">
          
          <label for="name"> <i class="fa-solid fa-user"> 收件人</i></label>
          <input class="name" id="name" type="text" placeholder=" 請輸入領貨人姓名，e.g. 王曉明"
            onclick="document.getElementById('name').value=''">
        </div>
        <div class="logistic-detail-input">
          <label for="phone"> <i class="fa-solid fa-mobile-screen-button"> 連絡電話</i></label>
          <input class="phone" id="phone" type="number" placeholder=" 請輸入連絡電話 ，e.g. 0912345678">
        </div>
        <div class="logistic-detail-input">
          <label for="adress"> <i class="fa-solid fa-map-location-dot"> 寄送地址</i> </label>
          <input class="adress" id="adress" type="text" placeholder=" 請輸入寄送地址(須提供郵遞區號)，e.g. 704-台南市北區 林森路三段">
        </div>
      </div>
      <!-- <div class="alert alert-danger fs-6 my-3" role="alert">
        <strong> 寄送資訊</strong> 請填正確，再點選 <strong> 商品結帳</strong> 送出訂購資訊。
      </div> -->
    </div>


  </div>
</template>

<style lang="scss" scoped>
.card-area {
  width: 100%;
  height: 35vw;
  margin-top: 10px;
  border-radius: 3px;
  background-color: #efe8e8;
  // overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .buyItemBlock {
      width: 80%;
      height: 15vw;
      overflow: auto;
      // border-bottom: 3px solid rgb(87, 85, 85);
      border: 2px solid rgb(87, 85, 85) ;
      border-radius: 5px;
      margin-top: 3px;
      // border-top: 2px  solid rgb(87, 85, 85);
      
    }

  .buyinfo {
    width: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;

    

    .fist {
      width: 100%;
      height: 60vh;

    }



  }

  .priceinfo {
    width: 100%;
    display: flex;
    justify-content: center;


  }

  .tradeWay {
    width: 80%;
    display: flex;
    justify-content: end;

    select {
      font-size: 12px;
      margin: 0 20px;
      width: 14vw;
      height: 2vw;
      text-align: center;
      background-color: rgb(182, 179, 179);
    }

    h6 {
      font-size: 14px;
    }

  }

  .logistic {
    width: 80%;
    border-top: 2px solid rgb(87, 85, 85);

    .logistic-detail {
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-items: center;
    
      background: #5d5e5b;
      border: 1px solid #aab095;
      padding: 5px 0;
     
      color: beige;
      border-radius: 3px;

    }

    .logistic-detail-input {
      width: 80%;
      margin-bottom: 3px;
margin-left: 20%;
      .name {
        margin-left: 37px;
      }
      .adress{
        margin-left: 21px;
      }
      .phone{
        margin-left: 25px;
      }
    }

    label {
      font-size: 13px;

    }

    input {
      width: 40vw;
      height: 2vw;
      font-size: 13px;
      text-align: left;
    }
  }


}</style>
