<script>
export default {
  components: {
   
  },
  props:[
      "district"
  ],
  data() {
    return {
        
    }
  },
  methods: {
    
  },
  // 生命週期
  mounted() {
    // this.fn();


  }
}




</script>

<template>
  <button type="button" class="cityBtn">
   <p>{{ district }} </p> 
  </button>
</template>

<style scoped>
.cityBtn{
  
    border: 1px solid #2f3130;
    background: #414949;
    color: rgb(211, 214, 208);
    width: 2vw;
    height: 2vw;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 2px;
    transition: 0.9s;
    
    
    
}
p{
    margin-top: 1rem;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    

    }
.cityBtn:hover{
    background: #babdbc;
    color: rgb(51, 54, 45);
   
    scale: 1.5;
}
.cityBtn:active{
    scale: 0.8;
}

</style>
