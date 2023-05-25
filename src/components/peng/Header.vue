<script>
export default{
    data(){
        return{
            orderList:[],
            account:"",
        }
    },
    methods:{
            // checkbox 的勾選狀態，若勾選則加入購物車
            transforOrder(){
                let arr = JSON.parse(localStorage.getItem("chartList"));
                let orderArr = [];
                console.log(arr);
                    for(let i = 0; i < arr.length; i++){
                        if(arr[i].condition === true ){
                            orderArr.push(arr[i])
                        }
                    }

                const acc = localStorage.getItem("email");
                console.log(acc);   
                
                return localStorage.setItem(acc, JSON.stringify(orderArr));
            }
    },
    mounted(){
    //     // if (localStorage.getItem("chartList") === null) {                   // 假使內容為空，我就新增資料進來，目的使刪除購物車時不會回朔
    //         localStorage.setItem("orderList", JSON.stringify(this.orderList));
    // //     // }

    //         this.orderList = JSON.parse(localStorage.getItem("orderList"));
    }
}
</script>

<template>
    <div class="pengTitle">
        <div class="header">
            <input type="text">
            <div class="btnS">
                <button type="button">搜尋</button>
            </div>
        </div>
        <div class="purchase">
            <button type="button" class="btnP" @click="transforOrder">結帳</button>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
.pengTitle{
width:100%;
height: 2.5rem;
display: flex;
border: 0.5px solid white;


    .header{
        width: 50%;
        background-color: #666;
        padding: 0.5rem;
        display: flex;
        // justify-content: space-around;
        align-items: center;
        
        // margin: auto;
        // margin-top: 20px;
        
        input{
            // display: block;
            // margin: auto;
            margin-right: 30px;
            // margin-bottom: 1rem;
            width: 300px;
        }

        .btnS{
            width: 50px;
            // display: block;
            // margin: auto;
        }

    }

    .purchase{
        width:50%;
        background-color: #666;
        display: flex;
        align-items: center;
        position: relative;

        .btnP{
        width: 100px;
        height: 30px;
        background-color: gray;
        // margin-top: 3rem;
        color: white;
        position: absolute;
        right: 20pt;

    }
    }
}
    

</style>