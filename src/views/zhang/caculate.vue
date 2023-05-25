<script>


export default{
    components:{
        
        
    },
  
    
    data(){
        return{
            

    }},

    methods:{
    fetchDishes(){
            
        let body = {
                "name": this.name
                        }
            fetch("http://localhost:8080/show-info",{
            method: "POST",
            headers: {
    "Content-Type": "Application/json"
        },
            body: JSON.stringify(body)
                })
            .then(res => res.json())
        .then(data => {
            console.log(data);
            leftdata = data;

            title2.append(leftdata.dishList.needed);
            title3.append(leftdata.dishList.cooking);
//   title2.innerText =leftdata.dishList.needed;
//   title3.innerText =leftdata.dishList.cooking;
                var newImagePath = "../../../public/zhang/Img/" +this.title + ".png";
                imageElement.src = newImagePath;
  
   
  
})
.catch(err => {

});


            
        }
       
        
    },
    mounted(){
        
    }
}
</script>

<template>
 
   
</template>
<style lang="scss" scoped>


</style>