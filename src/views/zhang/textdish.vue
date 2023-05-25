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
        <button class="closebtn" id="closebtn" type="button" @click="changeShowOutside">X</button>
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
    width: 800px;
    h2{
        font-size: 50px;
        font-weight: bold;
    }
    h3{
        font-size: 30px;
    }
    h5{
        font-size: 15px;
    }
    @import url('https://fonts.googleapis.com/css?family=Gochi+Hand');

    body {
      background-color: #ffb7b0;
      min-height: 70vh;
      padding: 40vh 30vw;
      color: hsl(210, 2%, 22%);
      font-family: 'Gochi Hand', cursive;
      text-align: left;
      font-size: 130%;  
    }

    h5 {
      line-height: 1.5;
      display: inline;
      background-image: linear-gradient(
            transparent 50%,
            #edf9c1 50%,
            #c3fdbc 85%,
            transparent 85%,
            transparent 100%
        );
        background-repeat: no-repeat;
        background-size: 0% 100%;
        animation: animatedBackground 2s cubic-bezier(0.645, 0.045, 0.355, 1) 0.5s forwards;
    }

    @keyframes animatedBackground {
        to {
            background-size: 100% 100%;
        }
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
            height:50px;
            width:50px;
            border-radius:50%;
            background-color:rgb(255, 255, 255);
            color:rgb(89, 128, 89);
            font-size:30px;
            font-weight:bolder;
            box-shadow: 4px 4px #85c596;
        }
        #closebtn:hover{
        transition: 0.5s;
        transform: scale(1.2);
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