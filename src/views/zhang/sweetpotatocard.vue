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
                    title:"紅薯餅",
                    img:"../../../public/zhang/Img/紅薯餅.png"
                    
                },
                {
                    title:"烤紅薯",
                    img:"../../../public/zhang/Img/烤紅薯.png"
                },
                {
                    title:"燉紅薯",
                    img:"../../../public/zhang/Img/燉紅薯.png"

                }
            ],
           
        }

    },methods: {
    

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
