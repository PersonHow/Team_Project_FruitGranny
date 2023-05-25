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
                    title:"紅蘿蔔煎餅",
                    img:"../../../public/zhang/Img/紅蘿蔔煎餅.png"
                    
                },
                {
                    title:"咖哩",
                    img:"../../../public/zhang/Img/咖哩.png"
                },
                {
                    title:"涼拌青菜",
                    img:"../../../public/zhang/Img/涼拌青菜.png"

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
