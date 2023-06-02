
<script>


export default {
    components: {


    },
    data() {
        return {
            selectionNum: null
        }
    }, props: [
        "selectShopppingCode",
        "selectId",
        "selectName",
        "selectNumber",
        "selectPrice",
        "selectStock",

    ],

    methods: {
        intilization() {
            this.selectionNum = this.selectNumber;
            console.log(this.selectNumber)
            console.log(this.selectionNum)
        },
        updateData() { //modify
            let body = {
                "shoppingCode": this.selectShopppingCode,
                "product": this.selectId,
                "number": this.selectionNum,
                "buyerAccount": localStorage.getItem('email')
            }
            fetch("http://localhost:8080/modi_data", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body)
            })
                .then(response => {
                    //vue不能用fetch+function 要用箭頭
                    //從JSON格式轉回Js物件
                    return response.json()
                })
                .then(data => {


                    console.log(data);

                    alert(data.msg);
                    this.emitPushSelect();

                })


        },
        deleteDate() {

            let body = {
                "shoppingCode":this.selectShopppingCode,
                "buyerAccount":localStorage.getItem('email')
                // "buyerAccount": "A124" //localstorage
            }
            fetch("http://localhost:8080/delete_data", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body)
            })
                .then(response => {
                    //vue不能用fetch+function 要用箭頭
                    //從JSON格式轉回Js物件
                    return response.json()
                })
                .then(data => {

                    console.log(data);

                    alert(data.msg);
                    this.emitPushSelect();

                })

        },
        emitPushSelect() {
            console.log(`CCC`)
            this.$emit("emitPushModi")
        }

    },


    // 生命週期}
    mounted() {
        // this.fn();
        // 從 Localstorage 取得值並代入到 帳號
        // this.selectionNum = this.selectNumber;
        // this.selectionStock = this.selectStock;
        this.intilization();
    }
}




</script>
<template>
    <div class="card">
        <div class="explainAndBtn">


            <!-- <img src="../../../public/shan/img/sweet-potato-600x400.jpg" alt=""> -->
            <div class="explain">


                <div class="changeNumandAdd">

                    <div class="content-arae">
                        <div class="nameItem">
                            <p>名稱：</p>
                            <p class="text-danger">{{ selectName }} </p>
                        </div>
                        <p>價格： {{ selectPrice }} </p>
                    </div>

                    <div class="content-arae">
                        <div class="nameItem">
                            <p>庫存數量：</p>
                            <p class="text-danger"> {{ selectStock - selectNumber }} </p>
                        </div>
                        <p>已選數量： {{ selectNumber }} </p>
                    </div>
                </div>

                <div class="content-arae">
                    <label for="addNum">數量異動</label>
                    <input class="addNum" type="number" v-model="this.selectionNum">
                    <p>項目價格： {{ selectPrice * selectNumber }} </p>
                </div>

                <div class="content-arae">
                    <button type="button" class="addCartBTN" @click="updateData()">
                        修改數量
                    </button>
                    <button type="button" class="addCartBTN" @click="deleteDate()">
                        刪除項目
                    </button>
                </div>

            </div>
        </div>


    </div>
</template>


<style lang="scss" scoped>
.explainAndBtn {
    overflow-y: auto;
}

.explain {
    border-radius: 5px;
    border: 2px solid #454141;
    display: flex;
    justify-content: space-evenly;

}

.changeNumandAdd {

    display: flex;
    // justify-content: center;
    align-items: center;
}

input {
    text-align: center;
}

.nameItem {
    display: flex;
}

.content-arae {
    text-align: center;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
}

.addNum {
    width: 5vw;
}

.addCartBTN {
    border-radius: 5px;
    background: #454141;
    color: antiquewhite;
    transition: 1s;
    width: 6vw;
    margin-bottom: 3px;
}

.addCartBTN:hover {
    background: antiquewhite;
    color: #454141;
    scale: 1.1;
}

.addCartBTN:active {
    scale: 0.9;
}
</style>
