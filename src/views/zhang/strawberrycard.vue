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
                    title:"草莓大福",
                    img:"../../../public/zhang/Img/草莓大福.png"
                    
                },
                {
                    title:"草莓蛋塔",
                    img:"../../../public/zhang/Img/草莓蛋塔.png"
                },
                {
                    title:"草莓蛋糕",
                    img:"../../../public/zhang/Img/草莓蛋糕.png"

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
