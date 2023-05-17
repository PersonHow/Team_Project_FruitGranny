<script >
import Card from "../../components/shan/Card.vue";
import HeaderView from "../../components/shan/Header.vue";

export default {
  components: {
    HeaderView,
    Card
  },
  data() {
    return {

    }
  },
  methods: {
    alertmsg() {
      alert("下訂成功!!! \n商品將於三天內出貨，請留意 \n\n (1) 簡訊通知出貨時間  \n (2) 簡訊通知到貨時間 \n (3) 宅急便電話取貨。 \n \n食品為低溫宅配商品，目前為指定18:00送達。  \n如有特殊時間送達需求請下訂24小時內撥電詢問。 \nTel: 06-2345678 (王小姐)");

    }
  },
  // 生命週期
  mounted() {
    // this.fn();


  }
}



</script>

<template>
  <div class="main">
    <div>
      <!-- <HeaderView /> -->
      <Card />
      <div class="bottom">
        <div></div>
        <div></div>

        <!-- <div class="homePic">
        <button class="homebtn">
        <img src="https://3.bp.blogspot.com/-WdzabbshBTg/Uku9LqB-WuI/AAAAAAAAYeU/eJp5ibIEeLQ/s250/navigation_home.png"
          alt="">
        </button>
      </div> -->

        <div class="requestCheckArea">
          <button type="button" class="requestCheckBtn" v-on:click="alertmsg">
            <i class="fa-regular fa-money-bill-1"> 商品結帳</i>


          </button>
        </div>
        
      </div>

    </div>
    
  </div>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  background: #adafa9;
  flex-direction: column;
  // display: flex;
  padding: 0 10px;
  // justify-content: center;
  align-items: center;
}

.bottom {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.requestCheckArea {
  width: 30%;
  display: flex;
  justify-content: right;
  align-items: flex-end;

}

.requestCheckBtn {
  color: beige;
  transition: 0.5s;
  width: 10vw;
  height: 2vw;
  background-color: #3e3d3d;
  border-radius: 3px;
  border: 1px solid #f9f9f8;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  margin-right: 105px;
}

.requestCheckBtn:hover {
  cursor: pointer; //會有手手
  background-color: beige;
  color: #544036;

}

.requestCheckBtn:active {
  scale: 0.9; //點擊後縮放
}

.homePic {
  width: 10vw;
  display: flex;
  justify-content: center;
  position: relative;
  left: 55px;


  .homebtn {

    transition: 0.5s;
    width: 10vw;
    height: 5vw;
    background-color: #adafa9;
    border-radius: 3px;
    border: 1px solid #adafa9;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .homebtn:hover {
    cursor: pointer; //會有手手
    background-color: adafa9;
    scale: 0.8;

  }

  .homebtn:active {
    scale: 0.7; //點擊後縮放
  }

  img {
    width: 95vw;
    height: 5vw;
  }

}</style>
