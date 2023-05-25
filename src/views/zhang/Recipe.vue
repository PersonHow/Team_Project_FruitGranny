<script>
import { RouterLink, RouterView } from 'vue-router'
import homepage from'./homepage.vue'
import bigpage from'./bigpage.vue'
import textt from'./text2.vue'
export default{
  components:{
       homepage,
       bigpage,
       textt 

    },
    data(){
      
    },
    methods: {
    
    },
    
}
</script>

<template>

  <div class="chobig">
  
    <div class="choose">
      <link href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap" rel="stylesheet">

        <h1 class="playful" aria-label="Wash your hands">
          <span aria-hidden="true">C</span><span aria-hidden="true">H</span><span aria-hidden="true">O</span><span aria-hidden="true">O</span><span aria-hidden="true">S</span><span aria-hidden="true">E</span><span aria-hidden="true"> </span>
        </h1>
      <!-- <h2>WELCOME!! 請選擇蔬果類型!!!</h2> -->
      <textt />
    </div>
  </div> 
</template>

<style lang="scss" scoped>

 
    
  .choose{
    height: 500px;
    width: 1100px;
    margin-top: -150px;
    font-size: 25px;
    display: block;
    justify-content: center;
    // background-color: #E4FFF7;
    $background: #E4FFF7;

    @function textShadow($precision, $size, $color){
      $value: null;
      $offset: 0;
      $length: $size * (1 / $precision) - 1;

      @for $i from 0 through $length {
        $offset: $offset + $precision;
        $shadow: $offset + px $offset + px $color;
        $value: append($value, $shadow, comma);
      }

      @return $value;
    }

    .playful span {
      position: relative;
      color: #5362F6;
      text-shadow: textShadow(0.25, 6, #E485F8);
      animation: scatter 1.75s infinite;
    }

    .playful span:nth-child(2n) {
      color: #ED625C;
      text-shadow: textShadow(0.25, 6, #F2A063);
      animation-delay: 0.3s;
    }

    .playful span:nth-child(3n) {
      color: #FFD913;
      text-shadow: textShadow(0.25, 6, #6EC0A9);
      animation-delay: 0.15s;
    }

    .playful span:nth-child(5n) {
      color: #555BFF;
      text-shadow: textShadow(0.25, 6, #E485F8);
      animation-delay: 0.4s;
    }

    .playful span:nth-child(7n), .playful span:nth-child(11n) {
      color: #FF9C55;
      text-shadow: textShadow(0.25, 6, #FF5555);
      animation-delay: 0.25s;
    }

    @keyframes scatter {
      0% {
        top: 0;
      }
      50% {
        top: -10px;
      }
      100% {
        top: 0;
      }
    }

    body {
      background-color: $background;
    }

    h1 {
      font-size: 75px;
      text-transform: uppercase;
      font-family: "Archivo Black", "Archivo", sans-serif;
      font-weight: normal;
      display: block;
      width: 666px;
      max-width: 80vw;
      min-height: 90px;
      height: auto;
      text-align: center;
      margin: 10rem auto;
      margin: calc(50vh - 5rem) auto;
    }

    @import url('https://fonts.googleapis.com/css?family=Gochi+Hand');

  body {
    background-color: #ffb7b0;
    min-height: 70vh;
    padding: 40vh 30vw;
    color: hsl(132, 23%, 29%);
    font-family: 'Gochi Hand', cursive;
    text-align: left;
    font-size: 130%;  
  }

  h2 {
    line-height: 1.5;
    display: inline;
    background-image: linear-gradient(
          transparent 50%,
          #f8ffe1 50%,
          #fffeb5 85%,
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
</style>