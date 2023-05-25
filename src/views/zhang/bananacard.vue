<script >
import card from'./card.vue';
export default{
    components:{
        card
    },
  
    
    data(){
        return{
            title:"Props標題",
            cardData:[
                {
                    title:"香蕉牛奶",
                    img:"../../../public/zhang/Img/香蕉牛奶.png"
                    
                },
                {
                    title:"香蕉鬆餅",
                    img:"../../../public/zhang/Img/香蕉鬆餅.png"
                },
                {
                    title:"香蕉冰淇淋",
                    img:"../../../public/zhang/Img/香蕉冰淇淋.png"

                }
            ]
        }
    }
   
}

</script>

<template>
    <div class='hui'>
       
        <card
       
        v-for="card in cardData"
        v-bind:title="card.title"
        v-bind:imgData="card.img" />
      <!-- v-for="card in cardDate" key="card.title" -->
    </div>
</template>
<style scoped>
.hui{
    display:flex;
    justify-content:center;
    
}
</style>
