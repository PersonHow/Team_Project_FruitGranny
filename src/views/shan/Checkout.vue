<script >
import Card from "../../components/shan/Card.vue";

export default {
  components: {
    Card
  },
  data() {
    return {

    }
  },
  methods: {
  },
  // 生命週期
  mounted() {
    // this.fn();


  }
}



</script>

<template>
  <div class="main">
    <div class="cardArea">
      <!-- 詳細資料區 -->
      <Card />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 30rem;
  background-color: #efe8e8;
  flex-direction: column;
  padding: 0 10px;
  align-items: center;
.cardArea{
  height: 80%;
  // border: 1px solid black;
}
  
}








</style>
