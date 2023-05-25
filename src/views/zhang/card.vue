<script>
import dishdetail from "./textdish.vue";

export default {
  components: {
    dishdetail,
  },
  props: ["title", "imgData"],
  data() {
    return {
      isShow: false,
      dishData: {
        title: "",
        needed: "",
        cooking: "",
      },
    };
  },
  methods: {
    handleClick() {
      this.changeShow();
      this.dishGet();
    },
    changeShow() {
      this.isShow = !this.isShow;
    },
    dishGet() {
  console.log(this.title); // 获取食物名称
  let body = {
    name: this.title,
  };
  fetch("http://localhost:8080/show-info", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data); // 获取正确结果(做法)
      this.dishData.title = this.title;
      this.dishData.needed = data.dishList.needed;
      this.dishData.cooking = data.dishList.cooking;
    });
},
  },
};
</script>

<template>
    <div class="Card">
      <div class="card" @click="handleClick">
        <img class="img" :src="imgData" :alt="title" />
        <button type="button" class="btn" id="btn"  style="width: 200px;height: 40px;">
          <p>PICK ME</p>
        </button>
        <h2 style="font-size: 20px;">{{ title }}</h2>
        <dishdetail
          v-show="isShow"
          v-on:switch="changeShow"
          :title="dishData.title"
          :needed="dishData.needed"
          :cooking="dishData.cooking"
        />
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
  .Card {
    height: 285px;
    width: 200px;
    background-color: transparent;
    display: block;
    justify-content: center;
    margin: 100px 30px;
    box-shadow: 5px 5px 5px #7694aa;
    .card{
     display: block;
     justify-content: center;
    .img {
      height: 200px;
      width: 200px;
    }

    .btn{
    font-size: 20px;
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    line-height: 40px;
    color: #283640;
    font-weight: bolder;
    background-color: transparent;
    border: 1px solid transparent;
    position: relative;
    transition: all .3s linear;
    }
    .btn > p{
        position: relative;
        z-index: 1;
    }
    .btn::before{
        content: "";
        width: 100%;
        height: 0%;
        display: block;
        background-color: #6bb2d5;
        position: absolute;
        top: 0;
        left: 0;
        transition: all .3s ease;
       
    }
    .btn:hover{
        color: #fff;
    }
    .btn:hover::before{
        height: 100%;
    }

    h2{
    
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color:#415b78;
         
    }
    
     
    }
  }
  </style>