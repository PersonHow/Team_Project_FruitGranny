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
                    title:"檸檬水",
                    img:"../../../public/zhang/Img/檸檬水.png"
                    
                },
                {
                    title:"檸檬紅茶",
                    img:"../../../public/zhang/Img/檸檬紅茶.png"
                },
                {
                    title:"檸檬拉麵",
                    img:"../../../public/zhang/Img/檸檬拉麵.png"

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
