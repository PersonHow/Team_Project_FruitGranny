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
                let arr = JSON.parse(localStorage.getItem("searchArr"));
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

    .purchase{
        width:100%;
        background-color: #688673;
        display: flex;
        align-items: center;
        position: relative;

        .btnP{
        width: 100px;
        height: 30px;
        background-color: rgb(52, 68, 57);
        // margin-top: 3rem;
        color: white;
        position: absolute;
        right: 20pt;
        border-radius: 10px;

    }
    }
}
    

</style>