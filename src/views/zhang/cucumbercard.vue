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
                    title:"醃黃瓜",
                    img:"../../../public/zhang/Img/醃黃瓜.png"
                    
                },
                {
                    title:"沙拉烏冬麵",
                    img:"../../../public/zhang/Img/沙拉烏冬麵.png"
                },
                {
                    title:"燉菜",
                    img:"../../../public/zhang/Img/燉菜.png"

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
