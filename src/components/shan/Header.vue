<script >
export default {
  components: {

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
  <div class="heading">
    <div class="headingfuction">
      
      
      <div>
        <button type="button" class="headingBtn">
          <i class="fa-solid fa-backward"> 返回購物車</i>
          
        </button>
      </div>

      <div class="systemTitle">
        <h5>結帳系統</h5>
      </div>

      <div>
        <button type="button" class="headingBtn">
        <i class="fa-solid fa-house"> H o m e </i>
      </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.heading {
  width: 95vw;
  height: 5vw;
  background: #5d5e5b;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .headingfuction {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;

   

    .systemTitle {
      margin-right: 150px;
    }


    h5 {
      font-size: 15px;
      text-align: center;
      color: beige;
      position: absolute;
      top: 30%;
    }


    .headingBtn {
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
    }

    .headingBtn:hover {
      cursor: pointer; //會有手手
      background-color: beige;
      color: #544036;
    }

    .headingBtn:active {
      scale: 0.9; //點擊後縮放
    }
  }

}
</style>
