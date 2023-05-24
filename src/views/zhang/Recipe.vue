<script>
import { RouterLink, RouterView } from 'vue-router'
import homepage from'./homepage.vue'
import bigpage from'./bigpage.vue'
export default{
  components:{
       homepage,
       bigpage
    },
    data(){
      return{
        isShow:false,
        modalInfo:{
        title:"草莓蛋塔",
        content:"需要材料:低筋麵粉10g|蛋黃2個|牛奶110g|煉奶10g|鮮奶油140g|白砂糖40g製作方法:1.牛奶、煉奶、鮮奶油和白砂糖倒入小鍋中，開小火加熱並拌至白砂糖溶化放涼。低筋麵粉過篩，加入放涼的蛋塔液，打入蛋黃續拌均勻，拌好的蛋塔液過篩後倒人擠花袋中備用2.酥皮裁好放在蛋塔模上，用指尖輕壓讓酥皮服貼3.烤箱先預熱220度。塔模中擠入蛋塔液，草莓洗淨切小塊，有加草莓的做草莓蛋塔，沒有的就是原味蛋塔，入烤箱烤15分鐘。4.烤好的蛋塔出爐，放上草莓塊即可。",
        cook1:"",
        cook2:"",
        cook3:"",
        cook4:"",
        },

        imgNum:false,
        selectName : '',
        lists : [
          {val:"A",item:'水果'},
          {val:"B",item:'蔬菜'},
          {val:"C",item:'選擇困難，直接看目錄'}
        ],

        fruit : '',
        fruitlists : [
        {val:"A",item:'香蕉'},
        // {val:"B",item:'橘子'},
        // {val:"C",item:'榴槤'},
        {val:"D",item:'草莓'},
        // {val:"E",item:'西瓜'},
        {val:"F",item:'檸檬'},
        // {val:"G",item:'蘋果'},
        // {val:"H",item:'哈密瓜'},
        ],
        veg : '',
        veglists : [
        // {val:"A",item:'九層塔'},
        // {val:"B",item:'番茄'},
        // {val:"C",item:'高麗菜'},
        // {val:"D",item:'青江菜'},
        {val:"E",item:'紅蘿菠'},
        {val:"F",item:'白菜'},
        {val:"G",item:'茄子'},
        {val:"G",item:'小黃瓜'},
        {val:"G",item:'紅薯'},
        ],


      imgArr:[
        "/S__99057666.jpg",
        "/S__s99057667.jpg"
        ],
      imgNum:false,

      

}


    },
    methods: {
      chnageImg(){
      const btnDOM=document.querySelector("#btn");

      btnDOM.addEventListener("click",()=>{
      const bigImg= document.querySelector("#btn"); 
            imgDOM.src ="/草莓蛋塔.png";
        })
      },
      changeShow(){
            this.isShow = !this.isShow
        }
  }
}
</script>

<template>
  <div class="up">
    <!-- <button style="height: 60px;width: 150px;color: #ffffff;background-color: #709b61;;"></button> -->
    

    <!-- <button style="height: 60px;width: 150px;color: #ffffff;background-color: #709b61;;">登入</button> -->
    <!-- <RouterLink to="/homepage" class="link">Home</RouterLink>
    <p>  |  </p>
    <RouterLink to="/loginpage" class="link">Login</RouterLink> -->






  </div>
  <div class="ko1"></div>
  <div class="chobig">
  <div class="choose">
    <h2>WELCOME!! 請選擇蔬果類型!!!</h2>


<div id="gender" class="test">

    <select v-model="selectName" style="height: 40px;width: 500px;font-size: 30px;text-align: center;color: rgb(73, 112, 82);font-weight: bolder;border-radius: 20px;">
        <option v-for="list in lists" :value="list.item">{{list.item}}</option>
  
    
      </select>

    <div v-if="selectName==='水果'">
    <div class="fruit">
      <select v-model="fruit" style="height: 40px;width: 500px;font-size: 30px;text-align: center;color: rgb(73, 112, 82);font-weight: bolder;border-radius: 20px;">
      <option v-for="list in fruitlists" :value="list.item">{{list.item}}</option>
      </select>

     
    </div>
  </div>
    <div v-if="selectName==='蔬菜'" style="height: 40px;width: 500px;font-size: 30px;text-align: center;color: rgb(73, 112, 82);font-weight: bolder;border-radius: 20px;">
    <div class="veg">
      <select v-model="veg"  style="height: 40px;width: 500px;font-size: 30px;text-align: center;color: rgb(73, 112, 82);font-weight: bolder;border-radius: 20px;">
      <option v-for="list in veglists" :value="list.item">{{list.item}}</option>
      </select>
  </div>
    </div>
  </div>

</div>
</div>
<div class="kooo"></div>
  <div class="all">
  
<div class="bigimg">
  <img src="" id="image">




</div>

<div class="koo">

</div>

  <div class="bigg">

    <div v-if="selectName==='選擇困難，直接看目錄'"> 
    <div class="big">


<div class="movenew">
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
<div class="carousel-item active">
<img src="/Img/草莓蛋塔.png" class="d-block w-30" alt="...">
</div>
<div class="carousel-item">
<img src="/Img/草莓蛋捲蛋糕.png" class="d-block w-30" alt="...">
</div>
<div class="carousel-item">
<img src="/Img/草莓蛋糕.png" class="d-block w-30" alt="...">
</div>
<div class="carousel-item">
<img src="/Img/草莓大福.png" class="d-block w-30" alt="...">
</div>
<div class="carousel-item">
<img src="/Img/草莓三明治.png" class="d-block w-30" alt="...">
</div>
<div class="carousel-item">
<img src="./Img/吐司.png" class="d-block w-30" alt="...">
</div>
<div class="carousel-item">
<img src="/Img/咖哩.png" class="d-block w-30" alt="...">
</div>
<!-- <div class="carousel-item">
<img src="/Img/哈密瓜奶油汽水.png" class="d-block w-30" alt="...">
</div> -->
<div class="carousel-item">
<img src="/Img/檸檬水.png" class="d-block w-30" alt="...">
</div>
<div class="carousel-item">
<img src="/Img/檸檬紅茶.png" class="d-block w-30" alt="...">
</div>
<!-- <div class="carousel-item">
<img src="/Img/沙拉烏冬面.png" class="d-block w-30" alt="...">
</div> -->
<div class="carousel-item">
<img src="/Img/涼拌青菜.png" class="d-block w-30" alt="...">
</div>
<!-- <div class="carousel-item">
<img src="/Img/火鍋.png" class="d-block w-30" alt="...">
</div> -->
<div class="carousel-item">
<img src="/Img/烤紅薯.png" class="d-block w-30" alt="...">
</div>
<div class="carousel-item">
<img src="/Img/烤茄子.png" class="d-block w-30" alt="...">
</div>
<!-- <div class="carousel-item">
<img src="/Img/焗烤南瓜.png" class="d-block w-30" alt="...">
</div> -->
<div class="carousel-item">
<img src="/Img/燉紅薯.png" class="d-block w-30" alt="...">
</div>
<div class="carousel-item">
<img src="/Img/燉茄子.png" class="d-block w-30" alt="...">
</div>
<div class="carousel-item">
<img src="./Img/白菜捲.png" class="d-block w-30" alt="...">
</div>

<!-- <div class="carousel-item">
<img src="/Img/糖葫蘆.png" class="d-block w-30" alt="...">
</div>

<div class="carousel-item">
<img src="/Img/蘆筍培根.png" class="d-block w-30" alt="...">
</div> -->
<div class="carousel-item">
<img src="/Img/醃黃瓜.png" class="d-block w-30" alt="...">
</div>
<div class="carousel-item">
<img src="/Img/香蕉牛奶.png" class="d-block w-30" alt="...">
</div>
<div class="carousel-item">
<img src="/Img/麻婆茄子.png" class="d-block w-30" alt="...">
</div>
</div>
<button class="carousel-control-prev" type="button"  data-bs-target="#carouselExampleControls" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button"  data-bs-target="#carouselExampleControls" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden" >Next</span>
</button>
</div>
</div>
</div>
</div>

    <div v-if="veg==='茄子'">
    <div class="big">


      <div class="movenew">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/Img/烤茄子.png" class="d-block w-30" alt="...">
    </div>
    <div class="carousel-item">
      <img src="/Img/燉茄子.png" class="d-block w-30" alt="...">
    </div>
    <div class="carousel-item">
      <img src="/Img/麻婆茄子.png" class="d-block w-30" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button"  data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"  data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden" >Next</span>
  </button>
</div>
  </div>
</div>
</div>

<div v-if="fruit==='草莓'">
    <div class="big">


      <div class="movenew">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/Img/草莓蛋塔.png" class="d-block w-30" alt="...">
    </div>
    <div class="carousel-item">
      <img src="/Img/草莓蛋捲蛋糕.png" class="d-block w-30" alt="...">
    </div>
    <div class="carousel-item">
      <img src="/Img/草莓蛋糕.png" class="d-block w-30" alt="...">
    </div>
    <div class="carousel-item">
      <img src="/Img/草莓大福.png" class="d-block w-30" alt="...">
    </div>
    <div class="carousel-item">
      <img src="/Img/草莓三明治.png" class="d-block w-30" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button"  data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"  data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden" >Next</span>
  </button>
</div>
  </div>
</div>
</div>


<div v-if="fruit==='香蕉'">
    <div class="big">


      <div class="movenew">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/Img/香蕉牛奶.png" class="d-block w-30" alt="...">
    </div>
 
   
  </div>
  <button class="carousel-control-prev" type="button"  data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"  data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden" >Next</span>
  </button>
</div>
  </div>
</div>
</div>

<div v-if="veg==='紅蘿菠'">
    <div class="big">


      <div class="movenew">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/Img/咖哩.png" class="d-block w-30" alt="...">
    </div>
 
   
  </div>
  <button class="carousel-control-prev" type="button"  data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"  data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden" >Next</span>
  </button>
</div>
  </div>
</div>
</div>



<div v-if="veg==='白菜'">
    <div class="big">


      <div class="movenew">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/Img/白菜捲.png" class="d-block w-30" alt="...">
    </div>
 
   
  </div>
  <button class="carousel-control-prev" type="button"  data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"  data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden" >Next</span>
  </button>
</div>
  </div>
</div>
</div>







<div v-if="fruit==='檸檬'">
    <div class="big">


      <div class="movenew">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/Img/檸檬水.png" class="d-block w-30" alt="...">
    </div>
    <div class="carousel-item active">
      <img src="/Img/檸檬紅茶.png" class="d-block w-30" alt="...">
    </div>
   
  </div>
  <button class="carousel-control-prev" type="button"  data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"  data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden" >Next</span>
  </button>
</div>
  </div>
</div>
</div>




<div v-if="veg==='紅薯'">
    <div class="big">


      <div class="movenew">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/Img/烤紅薯.png" class="d-block w-30" alt="...">
    </div>
    <div class="carousel-item active">
      <img src="/Img/燉紅薯.png" class="d-block w-30" alt="...">
    </div>
   
  </div>
  <button class="carousel-control-prev" type="button"  data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"  data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden" >Next</span>
  </button>
</div>
  </div>
</div>
</div>

<div v-if="veg==='小黃瓜'">
    <div class="big">


      <div class="movenew">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/Img/涼拌青菜.png" class="d-block w-30" alt="...">
    </div>
    <div class="carousel-item">
      <img src="/Img/醃黃瓜.png" class="d-block w-30" alt="...">
    </div>
   
  </div>
  <button class="carousel-control-prev" type="button"  data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"  data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden" >Next</span>
  </button>
</div>
  </div>
</div>
</div>





</div>







<div class="ko1">

</div>
<div class="btnn">

<button type="button" class="btn" id="btn" @click="changeShow">PICK ME</button>
    </div>
    <!-- <bigpage
    v-show="isShow" 
    v-on:switch="changeShow"
    :title="modalInfo.title"
    :content="modalInfo.content"
    :cook1="modalInfo.cook1"
    :cook2="modalInfo.cook2"
    :cook3="modalInfo.cook3"
    :cook4="modalInfo.cook4"
    :isShow="isShow"
    /> -->
</div>



<div class="ko">

</div>
<div class="down">
  <div class="logo">
  <img src="/Img/0BB345BE-24FF-4DFF-B3BA-2D2B57C79D6B-removebg-preview.png" alt="">
</div>
</div>







 
</template>
<style lang="scss" scoped>

.up{
  height: 60px;
  width: 100vw;
  font-size: 30px;
  color: #ffb13b;
  background-color: #feffd6;
  display: flex;
  justify-content: center;
  p{
    display: flex;
    justify-content: center;

  }
}
.ko1{
  height: 50px;
  width: 100vw;
  background-color: #fff;
}
.chobig{
  height: 0px;
  width: 100vw;
  display: flex;
  justify-content: center;
  text-align: center;
.choose{
  height: 35px;
  width: 500px;
  font-size: 25px;
  background-color: transparent;
  // display:block;
  // justify-content: center;

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
  .test{
    height: 50px;
    width: 100px;
  }

}
}
.kooo{
  height: 150px;
  width: 100vw;
  background-color: transparent;
}
.all{
  height:800px;
  width: 1330px;
  background-image: url(/Img/003.png);
  background-position: center;
  background-size: cover;



.koo{
  height: 200px;
  width: 100vw;
  background-color: transparent;
}
.bigg{
 
height: 400px;
width: 100vw;
background-color: transparent;

.big{
    width: 200px;
      height: 300px;
      display: flex;
      justify-content: end;
      background-color:transparent;
    
      border-radius: 30px;
      display: flex;
      margin: auto;
      justify-content: center;
   
      .movenew{
       
              // display: flex;
              // justify-content:center;
              img{
                width: 300px;
                height: 300px;
                background-color: transparent;
                // display: flex;
                
                
              // justify-content:center;
              }
          }
      
       
        

        }
        
}
.ko{
  height: 60px;
  width: 100vw;
  background-color: #fff;
}


}
.down{

  height: 300px;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #feffd6;
  .logo{
    display: flex;
    justify-content: center;
  }
}
.ko1{
  height: 40px;
  width: 100vw;
  background-color:transparent;
}
.btnn{
width: 10vw;
height: 80px;
display: flex;
justify-content: center;
  .btn{
            height: 100px;
            width: 100px;
            border-radius: 50%;
            font-size: 25px;
            background-color: #caead1;
            color: #3a6d44;
            font-weight: bold;
            box-shadow: 7px 7px #5a9760;
                
            &:hover{
              transition: 0.5s;
              transform: scale(1.2);
              }
    }
  }
</style>