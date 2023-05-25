<script>
import pineapplecard from './pineapplecard.vue';
import bananacard from './bananacard.vue';
import strawberrycard from './strawberrycard.vue';
import lemoncard from './lemoncard.vue';
import applecard from './applecard.vue';
import carrotcard from './carrotcard.vue';
import eggplantcard from './eggplantcard.vue';
import cucumbercard from './cucumbercard.vue';
import sweetpotatocard from './sweetpotatocard.vue';
import pumpkincard from './pumpkincard.vue';
import onioncard from './onioncard.vue';
import cabbagecard from './cabbagecard.vue';
import tomatocard from './tomatocard.vue';
export default {
  components: {
    pineapplecard,
    bananacard,
    strawberrycard,
    lemoncard,
    applecard,
    carrotcard,
    eggplantcard,
    cucumbercard,
    sweetpotatocard,
    pumpkincard,
    onioncard,
    cabbagecard,
    tomatocard
   
  },
  data() {
    return {
      visibleMenu: null,
      showSubMenu: false
    };
  },
  methods: {
    toggleSubMenu(menuId) {
      this.showSubMenu = true;
      this.visibleMenu = menuId;
    },
    isMenuVisible(menuId) {
      return this.visibleMenu === menuId;
    },
    toggleMenu(menuId) {
      if (this.visibleMenu === menuId) {
        this.visibleMenu = null;
      } else {
        this.visibleMenu = menuId;
        this.showSubMenu = false;
      }
    }
  }
};
</script>


<template>

      <!-- <h2>WELCOME!! 請選擇蔬果類型!!!</h2> -->
      <div class="app" id="app">
        <div class="btnn">
          <button @click="toggleMenu('fruitMenu')" id="fruitbtn" style="height: 50px;width: 100px;background-color: #fff ; box-shadow: 7px 7px #4e6491; border-radius: 10%; font-weight: bold">水果</button>
          <button @click="toggleMenu('vegetableMenu')" id="vegbtn" style="height: 50px;width: 100px;background-color: #fff; box-shadow: 7px 7px #4e6491; border-radius: 10%; font-weight: bold">蔬菜</button>
        </div>
        <div class="fb">
          <div id="fruitMenu"  v-show="isMenuVisible('fruitMenu')" >
            <button @click="toggleSubMenu('pineapple')"  style="height: 150px; width: 150px; color: #fff; font-size: 40px; background-color:  #fff; font-weight: bold; border-radius: 50%; box-shadow: 7px 7px #f9ee4b; transition: 0.5s; transform: scale(1.2); position: relative;">
              <img src="../../../public/zhang/Img/鳳梨.png" class="pinapple" alt="鳳梨" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
            </button>
            <button @click="toggleSubMenu('banana')" style="height: 150px; width: 150px; color: #fff; font-size: 40px; background-color:  #fff; font-weight: bold; border-radius: 50%; box-shadow: 7px 7px #dff28b; transition: 0.5s; transform: scale(1.2); position: relative;">
              <img src="../../../public/zhang/Img/香蕉.png" class="d-block w-30" alt="香蕉" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
            </button>
            <button @click="toggleSubMenu('strawberry')" style="height: 150px; width: 150px; color: #fff; font-size: 40px; background-color:  #fff; font-weight: bold; border-radius: 50%; box-shadow: 7px 7px #ffc0e6; transition: 0.5s; transform: scale(1.2); position: relative;">
              <img src="../../../public/zhang/Img/草莓.png" class="d-block w-30" alt="草莓" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
            </button>
            <button @click="toggleSubMenu('lemon')" style="height: 150px; width: 150px; color: #fff; font-size: 40px; background-color:  #fff; font-weight: bold; border-radius: 50%; box-shadow: 7px 7px #faff9a; transition: 0.5s; transform: scale(1.2); position: relative;">
              <img src="../../../public/zhang/Img/檸檬.png" class="d-block w-30" alt="檸檬" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
            </button>
            <button @click="toggleSubMenu('apple')" style="height: 150px; width: 150px; color: #fff; font-size: 40px; background-color:  #fff; font-weight: bold; border-radius: 50%; box-shadow: 7px 7px #ff909b; transition: 0.5s; transform: scale(1.2); position: relative;">
              <img src="../../../public/zhang/Img/蘋果.png" class="d-block w-30" alt="蘋果" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
            </button>
          </div>
          <div id="vegetableMenu" v-show="isMenuVisible('vegetableMenu')">
            <button @click="toggleSubMenu('carrot')" style="height: 150px; width: 150px; color: #fff; font-size: 40px; background-color:  #fff; font-weight: bold; border-radius: 50%; box-shadow: 7px 7px #ffb799; transition: 0.5s; transform: scale(1.2); position: relative;">
              <img src="../../../public/zhang/Img/紅蘿蔔.png" class="d-block w-30" alt="紅蘿蔔" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
            </button>
            <button @click="toggleSubMenu('eggplant')" style="height: 150px; width: 150px; color: #fff; font-size: 40px; background-color:  #fff; font-weight: bold; border-radius: 50%; box-shadow: 7px 7px #d587e6; transition: 0.5s; transform: scale(1.2); position: relative;">
              <img src="../../../public/zhang/Img/茄子.png" class="d-block w-30" alt="茄子" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
            </button>
            <button @click="toggleSubMenu('cucumber')" style="height: 150px; width: 150px; color: #fff; font-size: 40px; background-color: #fff; font-weight: bold; border-radius: 50%; box-shadow: 7px 7px #79bb71; transition: 0.5s; transform: scale(1.2); position: relative;">
              <img src="../../../public/zhang/Img/小黃瓜.png" class="d-block w-30" alt="小黃瓜" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
            </button>
            <button @click="toggleSubMenu('sweetpotato')" style="height: 150px; width: 150px; color: #fff; font-size: 40px; background-color:  #fff; font-weight: bold; border-radius: 50%; box-shadow: 7px 7px #755b7a; transition: 0.5s; transform: scale(1.2); position: relative;">
              <img src="../../../public/zhang/Img/紅薯.png" class="d-block w-30" alt="紅薯" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
            </button>
            <button @click="toggleSubMenu('pumpkin')" style="height: 150px; width: 150px; color: #fff; font-size: 40px; background-color:  #fff; font-weight: bold; border-radius: 50%; box-shadow: 7px 7px #dba253; transition: 0.5s; transform: scale(1.2); position: relative;">
              <img src="../../../public/zhang/Img/南瓜.png" class="d-block w-30" alt="南瓜" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
            </button>
            <button @click="toggleSubMenu('onion')" style="height: 150px; width: 150px; color: #fff; font-size: 40px; background-color:  #fff; font-weight: bold; border-radius: 50%; box-shadow: 7px 7px #8dd892; transition: 0.5s; transform: scale(1.2); position: relative;">
              <img src="../../../public/zhang/Img/蔥.png" class="d-block w-30" alt="蔥" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
            </button>
            <button @click="toggleSubMenu('cabbage')" style="height: 150px; width: 150px; color: #fff; font-size: 40px; background-color:  #fff; font-weight: bold; border-radius: 50%; box-shadow: 7px 7px #49b446; transition: 0.5s; transform: scale(1.2); position: relative;">
              <img src="../../../public/zhang/Img/高麗菜.png" class="d-block w-30" alt="高麗菜" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
            </button>
            <button @click="toggleSubMenu('tomato')" style="height: 150px; width: 150px; color: #fff; font-size: 40px; background-color:  #fff; font-weight: bold; border-radius: 50%; box-shadow: 7px 7px #e47059; transition: 0.5s; transform: scale(1.2); position: relative;">
              <img src="../../../public/zhang/Img/番茄.png" class="d-block w-30" alt="番茄" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
            </button>
          </div>
          
        </div>
      <div class="cardbox">
        <template v-if="showSubMenu && visibleMenu === 'pineapple'">
          <pineapplecard />
        </template>
        <template v-if="showSubMenu && visibleMenu === 'banana'">
          <bananacard />
        </template>
        <template v-if="showSubMenu && visibleMenu === 'strawberry'">
          <strawberrycard />
        </template>
        <template v-if="showSubMenu && visibleMenu === 'lemon'">
          <lemoncard />
        </template>
        <template v-if="showSubMenu && visibleMenu === 'apple'">
          <applecard />
        </template>
        <template v-if="showSubMenu && visibleMenu === 'carrot'">
          <carrotcard />
        </template>
        <template v-if="showSubMenu && visibleMenu === 'eggplant'">
          <eggplantcard />
        </template>
        <template v-if="showSubMenu && visibleMenu === 'cucumber'">
          <cucumbercard />
        </template>
        <template v-if="showSubMenu && visibleMenu === 'sweetpotato'">
          <sweetpotatocard />
        </template>
        <template v-if="showSubMenu && visibleMenu === 'pumpkin'">
          <pumpkincard />
        </template>
        <template v-if="showSubMenu && visibleMenu === 'onion'">
          <onioncard />
        </template>
        <template v-if="showSubMenu && visibleMenu === 'cabbage'">
          <cabbagecard />
        </template>
        <template v-if="showSubMenu && visibleMenu === 'tomato'">
          <tomatocard />
        </template>
      </div>
        <div id="vegetableMenu" v-show="isMenuVisible('vegetableMenu')">
        </div>
      </div>
  
</template>
      <style lang="scss" scoped>
      .app{
        height: 500px;
        width: 1100px;
       
      .btnn{
        font-size: 30px; 
        font-weight: bold;
        display: flex;
        margin: -250px;
        justify-content:space-around;
        
      }
      #fruitbtn:hover{
          transition: 0.5s;
          transform: scale(1.2);
      }
      #vegbtn:hover{
          transition: 0.5s;
          transform: scale(1.2);
      }
      
       .fb{
        width: 900px;
        display: flex;
        flex-wrap: wrap;
        height: 200px;
        overflow-y:auto;
        margin:300px 100px 60px;
        
        button {
            margin: 30px;
            
        img{
            height: 100px;
            width: 100px;
            flex: 10 10 calc(50% - 10px);
          
        }
        }
        
    }
    .cardbox{
      margin: -350px;
      display: flex;
      justify-content:space-around;
    }
  }
    </style>