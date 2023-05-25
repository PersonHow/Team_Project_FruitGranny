<script>
export default{
    props:[
        // foodname: data.dishList.name,
          // needed: data.dishList.needed,
          // cooking: data.dishList.cooking
    ],

    methods:{
        changeShowOutside(){
            this.$emit("switch")

            
        },
        
    },
    mounted(){
        const button = document.querySelector("#btn1");


        button.addEventListener("click", () => {
  
        let leftdata = [];
        const img = document.querySelector("#imgarea");
        const title =document.querySelector("#title");
        const title2 =document.querySelector("#title2");
        const title3 =document.querySelector("#title3");
        var imageElement = document.getElementById("image");
      
        console.log(img.alt);
        this.name = img.alt;
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
          title.innerText =leftdata.dishList.name;
          title2.innerText =leftdata.dishList.needed;
          title3.innerText =leftdata.dishList.cooking;
          var newImagePath = "../../../public/zhang/Img/" +leftdata.dishList.name + ".png";
          imageElement.src = newImagePath;
            let foodname=leftdata.dishList.name;
            let needed=leftdata.dishList.needed;
            let cooking=leftdata.dishList.cooking;
            // window.alert(leftdata.dishList.name+leftdata.dishList.needed+leftdata.dishList.cooking);
        //    img(src="../../../public/zhang/Img/"+leftdata.dishList.name+'.png');
           
          
        })
        .catch(err => {

        });

})
    }
}
</script>

<template>
<div> 
    <div  class="modal" :class="{show : isShow}">
        
        <!-- Modal Card -->
        <div class="cardd">
            
            <button class="btn1" id="btn1" style="button">點我查看</button>
            <img id="image" :src="imageSrc" class="d-block w-30" alt="...">
            <div class="textcard"><h1 id ="title" class ="title"></h1><p>需要食材:</p><h3 id ="title2" class ="title2"></h3><p>製作方法:</p><h5 id ="title3" class ="title3"></h5></div>
            <button class="closebtn"  id="closebtn" type="button" @click="changeShowOutside" >Close</button>
        
        </div>
        <!-- Background -->
<div class="bg"></div>
    </div>
</div>
</template>
<style lang="scss" scoped>

.modal{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top:0px;
    left:0px;
    transition: 2s;
    
    .btn1{
        height:200px;
        width:60px;
        border-radius:20px;
        background-color:rgb(54, 139, 74);
        color:white;
        font-size:20px;
        font-weight:bolder;
        }
    .textcard{
    height: 350px;
    overflow-y:auto;
    width: 900px;
    h3{
        font-size: 10px;
    }
    h5{
        font-size: 8px;
    }
    }
    img{
        width: 300px;
        height: 300px;
        background-color: transparent;     
        }
    .cardd{
        display:flex;
        justify-content:left;
        background-color: #fff;
        width:80vw;
        font-size:20px;
        font-weight:bolder;
        color: rgb(73, 112, 82);
        height: 40vw;
        border-radius: 2rem;
        padding: 2rem;
        text-align: center;
        .closebtn{
            height:200px;
            width:100px;
            border-radius:20px;
            background-color:rgb(54, 139, 74);
            color:white;
            font-size:20px;
            font-weight:bolder;
        }
        h2{
            margin: 0;
        }
      
    }
    .bg{
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity:0.65;//透明度
    position: fixed;
    top:0px;
    left:0px;
    z-index: -1;
    }
    .show{
        opacity: 1;
    }
}
</style>