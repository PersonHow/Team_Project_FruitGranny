
<script>
import VueSlickCarousel from 'vue-slick-carousel';

export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      carouselOptions: {
        // 輪播選項，可根據需求進行調整
        slidesToShow: 3,
        infinite: true,
        // 更多選項設置...
      },
      fruits: [
        { id: 'banana', name: '香蕉', image: '../../../public/zhang/Img/香蕉.png' },
        { id: 'strawberry', name: '草莓', image: '../../../public/zhang/Img/草莓.png' },
        { id: 'lemon', name: '檸檬', image: '../../../public/zhang/Img/檸檬.png' },
        { id: 'apple', name: '蘋果', image: '../../../public/zhang/Img/蘋果.png' },
        { id: 'pineapple', name: '鳳梨', image: '../../../public/zhang/Img/鳳梨.png' },
      ],
    };
  },
  methods: {
    navigateToPage(fruitId) {
      // 根據 fruitId 導航到其他 Vue 頁面
      this.$router.push(`/fruit/${fruitId}`);
    },
  },
};
</script>
<template>
    <div>
      <vue-slick-carousel :options="carouselOptions" class="carousel">
        <div v-for="fruit in fruits" :key="fruit.id">
          <img :src="fruit.image" class="d-block w-30" :alt="fruit.name" @click="navigateToPage(fruit.id)">
        </div>
      </vue-slick-carousel>
    </div>
  </template>