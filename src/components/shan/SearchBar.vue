<script>


export default {
    components: {
       
    },
    data() {
        return {
          searchData:null
    }},
    methods: {

    submitDate(){
        console.log('push')
        this.$emit("emitPushProduct",this.searchData)
    }
    },
    // 生命週期}
    mounted() {
        // this.fn();


    }
}




</script>


<template>
<div class="searchbar">
    {{ searchData }}
<label for="searchBar">商品搜尋</label>   
<input class="searchBar" type="text" name="" id="searchBar" placeholder="請輸入關鍵字" v-model="searchData">
<button type="button" class="searchReqBtn" v-on:click="submitDate">
    <i class="fa-solid fa-magnifying-glass">搜尋</i>
</button>
</div>

  
</template>


<style lang="scss" scoped>
.searchbar{
    width: 65vw;
    height: 2vw;
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    border-radius: 20px;
    border: 2px solide rgb(45, 50, 46) ;
}
label{

    margin-right: 30px;
}
input{
    text-align: center;
    border: none;
    width: 50vw;
    height: 2vw;
    margin-right: 10px;
}
.searchReqBtn{
    background-color:rgb(67, 90, 72) ;
    border-radius: 20px;
    color: rgb(223, 226, 224);
}
</style>