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
import newmenucard from './newmenucard.vue';
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
    tomatocard,
    newmenucard
   
  },
  created() {
    const savedMenuData = localStorage.getItem('menuData');
    if (savedMenuData) {
      this.menuData = JSON.parse(savedMenuData);
    }
  },

  data() {
    return {
      visibleMenu: null,
      showSubMenu: false,
      showMenu: false,
      showDialog: false,
      // showMenu: true,
      showDialog: false,
      isEmptyFields: false,
      dishName: '',
      ingredients: '',
      instructions: '',
      menuData: [],
      dishName: '',
      showNewMenu:false,
      showNewMenubg:false,
    };
  },
  methods: {
    toggleSubMenu(menuId) {
    this.showSubMenu = true;
    this.visibleMenu = menuId;
    this.showMenu = false;
    this.showNewMenu = false;
    this.showNewMenubg = false;
  },
  isMenuVisible(menuId) {
    return this.visibleMenu === menuId;
    this.showMenu = false;
  },
  toggleMenu(menuId) {
    if (this.visibleMenu === menuId) {
      this.visibleMenu = null;
      this.showMenu = false;
      this.showNewMenu = false;
      this.showNewMenubg = false;
    } else {
      this.visibleMenu = menuId;
      this.showSubMenu = false;
      this.showMenu = false;
      this.showNewMenu = false;
      this.showNewMenubg = false;
    }
  },
  showInputs() {
    this.showMenu = true;
    this.showSubMenu = false;
    this.visibleMenu = null;
    this.showNewMenu = false;
    this.showNewMenubg = false;
  },
  sendData() {
    this.$emit('menuData', this.menuData);
  },
  saveInputs() {
    if (this.dishName && this.ingredients && this.instructions) {
      const isDuplicate = this.menuData.some((menu) => {
        return (
          menu.dishName === this.dishName &&
          menu.ingredients === this.ingredients &&
          menu.instructions === this.instructions
        );
      });

      if (isDuplicate) {
        this.showDialog = true;
        this.isDuplicate = true;
        this.isEmptyFields = false;
        this.showNewMenu = false;
        this.showNewMenubg = false;
      } else {
        const newMenu = {
          dishName: this.dishName,
          ingredients: this.ingredients,
          instructions: this.instructions,
        };
        this.menuData.push(newMenu);
        this.dishName = '';
        this.ingredients = '';
        this.instructions = '';
        this.showDialog = true;
        this.isDuplicate = false;
        this.isEmptyFields = false;
        this.showNewMenu = false;
        this.showNewMenubg = false;
        localStorage.setItem('menuData', JSON.stringify(this.menuData));
      }
    } else {
      this.isEmptyFields = true;
      this.showDialog = true;
      this.isDuplicate = false;
      this.showNewMenu = false;
      this.showNewMenubg = false;
    }
  },
  closeModal() {
    this.showDialog = false;
    this.dishName = '';
    this.ingredients = '';
    this.instructions = '';
  },
  shownewmenu() {
    this.showNewMenu = true;
    this.showMenu = false;
    this.showNewMenubg = true;
  },
  deleteMenu(index) {
    this.menuData.splice(index, 1);
    localStorage.setItem('menuData', JSON.stringify(this.menuData));
  }
  },
  
};
</script>


<template>

      <!-- <h2>WELCOME!! 請選擇蔬果類型!!!</h2> -->
      <div class="app" id="app">
        <!-- <newmenucard /> -->
      
       
                <button @click="shownewmenu" id="addmenubtn" style="height: 50px;width: 200px;background-color: #fff; box-shadow: 7px 7px #4e6491; border-radius: 6%; font-weight: bold ; position: relative; top: -300px;left:15px;">查看其他菜單</button>
            <button @click="showInputs" id="addmenubtn" style="height: 50px; width: 200px; background-color: #fff; box-shadow: 7px 7px #4e6491; border-radius: 6%; font-weight: bold; position: relative; top: -300px; left: 660px;">
              我想提供菜單
            </button>
            
            <div class="btnn">
                  <button @click="toggleMenu('fruitMenu')" id="fruitbtn" style="height: 50px;width: 100px;background-color: #fff ; box-shadow: 7px 7px #4e6491; border-radius: 10%; font-weight: bold">水果</button>
                  <button @click="toggleMenu('vegetableMenu')" id="vegbtn" style="height: 50px;width: 100px;background-color: #fff; box-shadow: 7px 7px #4e6491; border-radius: 10%; font-weight: bold">蔬菜</button>
                
                </div>
                 <!-- 添加 created 钩子，在组件创建时从本地存储加载 menuData -->
            <div v-show="showMenu" class="menuinput" id="menuinput">
              <label for="dishName">菜名:</label>
              <input type="text" id="dishName" placeholder="請輸入菜名" class="input-field" v-model="dishName">

              <label for="ingredients">所需食材:</label>
              <input type="text" id="ingredients" placeholder="請輸入所需食材" class="input-field" v-model="ingredients">

              <label for="instructions">製作方法:</label>
              <input type="text" id="instructions" placeholder="請輸入製作方法" class="input-field" v-model="instructions">

              <button @click="saveInputs" style="height: 60px; width: 80px; color: #fff; font-size: 40px; background-color:  #7c9ccf; font-weight: bold; border-radius: 20%; box-shadow: 3px 3px #41658f; transition: 0.5s; transform: scale(1.2);">OK</button>
            </div>

            <div class="cardss" v-show="showNewMenubg">
              <div class="cards" v-show="showNewMenu">
                <!-- 遍历 menuData，显示每个菜单卡片 -->
                <div v-for="(menu, index) in menuData" :key="index" class="card">
                  <h3 style="font-style: 30px;">菜名為:</h3>
                  <h1 style="font-style: 15px;color: #100e0f;font-weight: bold;">{{ menu.dishName }}</h1>
                  <h3 style="font-style: 30px;">所需食材為: </h3>
                  <h5 style="font-style: 15px;">{{ menu.ingredients }}</h5>
                  <h3 style="font-style: 30px;">製作方法為: </h3>
                  <h5 style="font-style: 15px;">{{ menu.instructions }}</h5>
                  <button @click="deleteMenu(index)" style="height: 50px; width: 300px; background-color: #fff; box-shadow: 7px 7px #4e6491; border-radius: 6%; font-weight: bold;">删除</button>
                </div>
              </div>
            </div>

            <!-- 对话框 -->
            <div v-if="showDialog" class="dialog-overlay">
              <div class="dialog">
                <h2 v-if="isEmptyFields" style="color: #b42e2b; font-weight: bold; font-size: 50px;">錯誤!</h2>
                <h2 v-else-if="isDuplicate" style="color: #b42e2b; font-weight: bold; font-size: 50px;">新增菜譜失敗</h2>
                <h2 v-else style="color: #49b446; font-weight: bold; font-size: 50px;">新增菜譜成功</h2>
                <p v-if="isEmptyFields">輸入框不能為空</p>
                <p v-else-if="isDuplicate">已有相同菜譜</p>
                <p v-else>
                  <h3>菜名</h3>
                  <h2 style="font-style: 40px;">{{ menuData[menuData.length - 1].dishName }}</h2>
                  <h3>新增成功!!</h3>
                </p>
                <button @click="closeModal">确定</button>
              </div>
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
      
        <div id="vegetableMenu" v-show="isMenuVisible('vegetableMenu')">
        </div>
      </div>
    
          </div>
          
</template>
      <style lang="scss" scoped>

        
      .app{
        height: 700px;
        width: 1100px;
     
        .menuinput{
          position: relative;
          display: flex;
          top: 300px;
          left: 80px;
          font-weight: bolder;

          
          .input-field {
           
           
            display: block;
            width: 20%;
            box-sizing: border-box;
            border: 2px solid #ccc;
            border-radius: 8px;
            padding: 8px;
            margin-bottom: 16px;
          }

          .input-field::placeholder {
            color: gray;
          }
      }
        
        .dialog-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .dialog {
          
          background-color: white;
          height:500px;
          overflow-y: auto;
          width: 50%;
          padding: 20px;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          word-break: break-all;
        }

        .dialog h2 {
          margin-bottom: 30px;
        }

        .dialog h3 {
          margin-bottom: 40px;
        }

        .dialog p {
          margin-bottom: 12px;
        }

        .dialog button {
          padding: 5px 10px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
        }
       
        #addmenubtn:hover{
          transition: 0.5s;
          transform: scale(1.2);
      }
      .bigmenuinput{  
        .input-field {
          margin-bottom: 10px;
        }

      
       
      }
       
      .btnn{
        font-size: 30px; 
        font-weight: bold;
        display: flex;
        margin:  -250px -380px;
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
        margin:300px 120px 60px;
        
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
      height: 400px;
      overflow-y: auto;
      margin: -400px;
      display: flex;
      justify-content:space-around;
    }
    .cardss{
      height: 300px;
      width: 100%;
      overflow-y:auto;
      position: relative;
      top: 270px;
      background-color: #aec2ee;
    .cards {
    
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 20px;
          .card {
            overflow-y: auto;
            height: 300px;
            width: 320px;
            background-color:#fff;
          }
        } 
      }
  }
    </style>