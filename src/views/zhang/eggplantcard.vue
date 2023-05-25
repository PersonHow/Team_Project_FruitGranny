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
                    title:"燉茄子",
                    img:"../../../public/zhang/Img/燉茄子.png"
                    
                },
                {
                    title:"烤茄子",
                    img:"../../../public/zhang/Img/烤茄子.png"
                },
                {
                    title:"麻婆茄子",
                    img:"../../../public/zhang/Img/麻婆茄子.png"

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
