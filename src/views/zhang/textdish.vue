<script>
// import pineapplecard from './pineapplecard.vue'
export default{
    components:{
        // pineapplecard
    },
    props: {
    title: {
      type: String,
      required: true,
    },
    needed: {
      type: String,
      required: true,
    },
    cooking: {
      type: String,
      required: true,
    },
  
  },
    data() {
        return {
            name:null,
            getIndex:null,
          
        }
    },
    methods: {
    getImagePath(title) {
      return `../../../public/zhang/Img/${title}.png`;
    },
  },}
   
</script>

<template>
    <div class="modal" :class="{ show: isShow }">
      <div class="cardd">
        <img :src="getImagePath(title)" alt="Dish Image">
        <div class="textbox">
        <h2> {{ title }}</h2>
        <h3> 食材: </h3><h5>{{ needed }}</h5>
        <h3> 製作方法: </h3><h5>{{ cooking }}</h5>
        </div>
        <button class="closebtn" id="closebtn" type="button" @click="changeShowOutside">Close</button>
      </div>
      <div class="bg"></div>
    </div>
  </template>
 <!-- Background -->
<!-- <h1 id="title" class="title">{{ title }}</h1> -->
<style lang="scss" scoped>

.modal{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top:0px;
    left:0px;
    transition: 2s;
    
    .btn1{
        height:200px;
        width:60px;
        border-radius:20px;
        background-color:rgb(54, 139, 74);
        color:white;
        font-size:20px;
        font-weight:bolder;
        }
    .textbox{
    height: 350px;
    overflow-y:auto;
    width: 900px;
    h3{
        font-size: 10px;
    }
    h5{
        font-size: 8px;
    }
    }
    img{
        width: 300px;
        height: 300px;
        background-color: transparent;     
        }
    .cardd{
        display:flex;
        justify-content:left;
        background-color: #fff;
        width:80vw;
        font-size:20px;
        font-weight:bolder;
        color: rgb(73, 112, 82);
        height: 40vw;
        border-radius: 2rem;
        padding: 2rem;
        text-align: center;
        .closebtn{
            height:200px;
            width:100px;
            border-radius:20px;
            background-color:rgb(54, 139, 74);
            color:white;
            font-size:20px;
            font-weight:bolder;
        }
        h2{
            margin: 0;
        }
      
    }
    .bg{
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity:0.65;//透明度
    position: fixed;
    top:0px;
    left:0px;
    z-index: -1;
    }
    .show{
        opacity: 1;
    }
}
</style>