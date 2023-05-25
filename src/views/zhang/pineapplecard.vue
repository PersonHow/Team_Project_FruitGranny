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
                    title:"鳳梨果醬",
                    img:"../../../public/zhang/Img/鳳梨果醬.png"
                    
                },
                {
                    title:"鳳梨炒飯",
                    img:"../../../public/zhang/Img/鳳梨炒飯.png"
                },
                {
                    title:"鳳梨蝦球",
                    img:"../../../public/zhang/Img/鳳梨蝦球.png"

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
