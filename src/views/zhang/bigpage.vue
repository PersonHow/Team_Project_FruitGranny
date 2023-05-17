<script>
export default{
    props:[
        "title",
        "content",
        "cook1",
        "cook2",
        "cook3",
        "cook4",
        "isShow"
    ],
    methods:{
        changeShowOutside(){
            this.$emit("switch")
        }
    }
    // mounted(){
    //     if(isShow){
    //         setTimeout(()=>{
    //             const modal = document.getElementById("#modal");
    //             modal.setAttribute("class","modal Show"),1000
    //         })
    //     }
    // }
}
</script>

<template>
<div> 
    <div  class="modal" :class="{show : isShow}">
        
        <!-- Modal Card -->
        <div class="cardd">
            <h2>{{ title }}</h2>    
            <img src="/Img/草莓蛋塔.png" class="d-block w-30" alt="...">
            <!-- {{ isShow }} -->
            <p>{{ content }}</p>
            <p>{{ cook1 }}</p>
            <p>{{ cook2 }}</p>
            <p>{{ cook3 }}</p>
            <p>{{ cook4 }}</p>
        
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
    img{
        width: 400px;
        height: 400px;
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