<script >
import newbigpage from'./newbigpage.vue'
export default{
components:{
    newbigpage
},
props:[
    "title",
    "imgData"
],
data(){
    return{
    isShow:false,
    }
},
methods: {
      
     
     
      changeShow(){
        this.isShow = !this.isShow
      },
    },

}

</script>

<template>
    <div class="Card">
       
<img class="img" :src="imgData" :alt="title">
<button type="button" class="btn" id="btn" @click="changeShow">PICK ME</button>
<h2>{{title}}</h2>
<newbigpage 
   v-show="isShow" 
   v-on:switch="changeShow"
 
   />
 </div>
</template>
<style lang="scss" scoped>
.Card{
    height: 300px;
    width:200px;
    background-color:transparent;
    display: block;
    justify-content: center;
    

.img{
    height:200px;
    width:200px;

}
.button{
    height: 50px;
    width: 100px;
}}
</style>