<script >
import caculateView from './caculate.vue';
import card from'./card.vue';
export default{
    components:{
        card,
        caculateView
        // textdish,
        
    },
  
    
    data(){
        return{
            title:"Props標題",
            cardData:[
                {
                    title:"吐司",
                    img:"../../../public/zhang/Img/吐司.png"
                    
                },
                {
                    title:"羅勒義大利麵",
                    img:"../../../public/zhang/Img/羅勒義大利麵.png"
                },
                {
                    title:"沙拉烏冬麵",
                    img:"../../../public/zhang/Img/沙拉烏冬麵.png"

                }
            ],
           
        }

    }
   
}

</script>

<template>
    <div class='hui'>
       
        <card
        v-for="(card,index) in cardData"
        
        v-bind:title="card.title"
        v-bind:imgData="card.img"
        

        />
                <!-- @click="submitIndex(index,card.title)"  -->
      
      <!-- v-for="card in cardDate" key="card.title" -->
    </div>
</template>
<style scoped>
.hui{
    display:flex;
    justify-content:center;
    
}
</style>
