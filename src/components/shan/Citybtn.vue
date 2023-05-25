<script>
export default {
  components: {

  },
  props: [
    "getNorth",
    "getMid",
    "getSourth",
    "geteast"

  ],

  data() {
    return {
      northCity: [
        { name: '臺北市' },
        { name: '新北市' },
        { name: '基隆市' },

        { name: '桃園市' },
        { name: '新竹縣' },
        { name: '新竹市' },
        { name: '宜蘭縣' }
      ],
      midCity: [
        { name: '苗栗縣' },
        { name: '臺中市' },
        { name: '彰化縣' },
        { name: '南投縣' },
        { name: '雲林縣' }

      ],
      sourthCity: [
        { name: '高雄市' },
        { name: '臺南市' },
        { name: '嘉義市' },
        { name: '嘉義縣' },
        { name: '屏東縣' },
        // { name: '澎湖縣' }
      ],
      eastCity: [
        { name: '花蓮縣' },
        { name: '臺東縣' }

      ]


    }
  },
  methods: {

    throwCityNameNorth(index) {

      // console.log(index)
      this.$emit("emitPush", index);
    },
    throwCityNameMid(index) {

      // console.log(index)
      this.$emit("emitPush1", index);
    },
    throwCityNameSourth(index) {

      // console.log(index)
      this.$emit("emitPush2", index);
    },
    throwCityNameEast(index) {

      // console.log(index)
      this.$emit("emitPush3", index);
    }

  },
  // 生命週期
  mounted() {
    // this.fn();


  }
}




</script>

<template>
  <div class="city-block">
    <!-- 北部 -->
    <div class="direction-block " v-if="getNorth">
      <!-- <h5>北部</h5> -->
      <button type="button" class="cityBtn" v-for="(item, index) in  northCity" @click="throwCityNameNorth(index)">
        <p>{{ item.name }} </p>
      </button>
    </div>
    <!-- 南部 -->
    <div class="direction-block " v-if="getMid">
      <!-- <h5>中部</h5> -->
      <button type="button" class="cityBtn" v-for="(item, index) in  midCity" @click=" throwCityNameMid(index)">
        <p>{{ item.name }} </p>
      </button>
    </div>
    <div class="direction-block " v-if="getSourth">
      <!-- <h5>南部</h5> -->
      <button type="button" class="cityBtn" v-for="(item, index) in  sourthCity" @click=" throwCityNameSourth(index)">
        <p>{{ item.name }} </p>
      </button>
    </div>
    <div class="direction-block " v-if="geteast">
      <!-- <h5>東部</h5> -->
      <button type="button" class="cityBtn" v-for="(item, index) in  eastCity"  @click="throwCityNameEast(index)" >
        <p>{{ item.name }} </p>
      </button>
    </div>

  </div>
</template>

<style scoped>
h5 {
  margin-top: 5px;
  text-align: center;
}

p {
  margin-top: 0rem;
  margin-bottom: 0rem;
}
.direction-block{
  display: flex;
  justify-content: center;
  align-items: center;
}

.city-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
}

.cityBtn {

  border-radius: 5px;
  background: #65756b;
  color: aliceblue;
  transition: 0.5s;
  margin: 1px;


}

.cityBtn:hover {
  background: #b4b8b5;
  color: rgb(44, 46, 48);
}

.cityBtn:active {
  scale: 0.5;
}
</style >