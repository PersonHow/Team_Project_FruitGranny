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
                    title:"高麗菜捲",
                    img:"../../../public/zhang/Img/高麗菜捲.png"
                    
                },
                {
                    title:"高麗菜水餃",
                    img:"../../../public/zhang/Img/高麗菜水餃.png"
                },
                {
                    title:"火鍋",
                    img:"../../../public/zhang/Img/火鍋.png"

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
