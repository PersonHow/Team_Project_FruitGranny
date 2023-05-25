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
        <button type="button" class="btn" id="btn">
          PICK ME
        </button>
        <h2>{{ title }}</h2>
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
    height: 300px;
    width: 200px;
    background-color: transparent;
    display: block;
    justify-content: center;
  
    .img {
      height: 200px;
      width: 200px;
    }
    .button {
      height: 50px;
      width: 100px;
    }
  }
  </style>