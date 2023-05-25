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
                    title:"培根蔥捲",
                    img:"../../../public/zhang/Img/南瓜濃湯.png"
                    
                },
                {
                    title:"蔥油拌麵",
                    img:"../../../public/zhang/Img/蔥油拌麵.png"
                },
                {
                    title:"蔥燒豆腐",
                    img:"../../../public/zhang/Img/蔥燒豆腐.png"

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
