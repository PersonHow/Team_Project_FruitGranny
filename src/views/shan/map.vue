<script>
import buttonView from '../../components/shan/Button.vue';
import cityBtnView from '../../components/shan/Citybtn.vue';

export default {
    components: {
        buttonView,
        cityBtnView
    },
    data() {
        return {
            input: [
                {
                    name: '北'
                },
                {
                    name: '中'
                },
                {
                    name: '南'
                },
                {
                    name: '東'
                }
            ],
            isNorth: false,
            isSourth: false,
            isMid: false,
            isEast: false,
            isMove: false,
            isResult: false,
            inputCitynameN: [
                '臺北市',
                '新北市',
                '基隆市',

                '桃園市',
                '新竹縣',
                '新竹市',
                '宜蘭縣'

            ],
            cityInput: null, //北中南東共用變數到fetch
            resultarr: [],//fecth傳回資料
            inputCitynameM: [
                '苗栗縣',
                '臺中市',
                '彰化縣',
                '南投縣',
                '雲林縣'

            ],
            btnShow: false, //重查BTN
            inputCitynameS: [
                '高雄市',
                '臺南市',
                '嘉義市',
                '嘉義縣',
                '屏東縣',
                // '澎湖縣'

            ],
            inputCitynameE: [
                '花蓮縣',
                '臺東縣'

            ],
            theChangeIndex:null //前一筆資料防呆



        }
    },
    methods: {
        getCityIndex(index) {



            console.log(index);


            if (index === 0) {
                this.isNorth = !this.isNorth;


            } else {
                this.isNorth = false;


            }
            if (index === 1) {
                this.isMid = !this.isMid;

            } else {
                this.isMid = false;

            }
            if (index === 2) {
                this.isSourth = !this.isSourth;

            } else {
                this.isSourth = false;

            }

            if (index === 3) {
                this.isEast = !this.isEast;

            } else {
                this.isEast = false;


            }





        },
        getCityNorth() {
            console.log('north')
            this.isNorth = !this.isNorth;
            this.isMid = false;
            this.isSourth = false;
            this.isEast = false;

        },
        getCityMid() {
            console.log('Mid')
            this.isMid = !this.isMid;
            this.isNorth = false;
            this.isSourth = false;
            this.isEast = false;

        },


        getCitySourth() {
            console.log('this.isSourthd')
            this.isSourth = !this.isSourth;
            this.isMid = false;
            this.isNorth = false;
            this.isEast = false;

        },
        getCityEast() {
            this.isEast = !this.isEast;
            this.isMid = false;
            this.isNorth = false;
            this.isSourth = false;
        },

        changeMove() {

            if (this.isSourth === true || this.isNorth === true
                || this.isEast === true || this.isMid === true) {
                this.isMove = true;
                this.isResult = true;

                // this.isCityBtn = true;
            } else {
                this.isMove = false;
                this.isResult = false;
                this.btnShow = false;
                // this.isCityBtn = false;
                searchResult.replaceChildren();
            }
            // this.isMove = !this.isMove;
            // this.isResult = !this.isResult;


        },
        pureChange(){
            this.isMove = !this.isMove;
            if(this.isMove === false){
                searchResult.replaceChildren();
                this.isSourth === false; 
                this.isNorth === false;
                this.isEast === false;
                this.isMid === false;

            }
        },
        getCityInfo() {


            const searchResult = document.querySelector('#searchResult');//li

            let body = {

                "place": this.cityInput
            }

            fetch("http://localhost:8080/search_product", {
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

                    let arrResult2 = [];
                    console.log(data);
                    this.resultarr = data.searchAllRes;


                    if (data.searchAllRes.length === 0) {

                        searchResult.append(`抱歉!目前無任何上架該地區的產品`);
                        searchResult.append(document.createElement("br"));
                        searchResult.append(`---此次搜尋底部---`);
                        searchResult.append(document.createElement("br"));
                    } else {

                        for (let i = 0; i < this.resultarr.length; i++) {
                            arrResult2 = this.resultarr[i];

                            searchResult.append(document.createElement("li"));
                            searchResult.append(`商品名稱:${arrResult2.name}`);
                            searchResult.append(document.createElement("br"));
                            searchResult.append(`商品分類:${arrResult2.type}`);
                            searchResult.append(document.createElement("br"));
                            searchResult.append(`產銷日期:${arrResult2.date}`);
                            searchResult.append(document.createElement("br"));
                            searchResult.append(`商品描述:${arrResult2.description}`);
                            searchResult.append(document.createElement("br"));
                            searchResult.append(`商品價格:${arrResult2.price}`);
                            searchResult.append(document.createElement("br"));
                            searchResult.append(`商品數量:${arrResult2.number}`);
                            searchResult.append(document.createElement("br"));


                        };


                        searchResult.append(document.createElement("br"));
                        searchResult.append(`---此次搜尋底部---`);
                        searchResult.append(document.createElement("br"));




                    }

                    this.btnShow = true




                })




        },
        getemitN(index) { //北部index獲取

            if (index!==null || this.theChangeIndex===index ||this.theChangeIndex!==index) { searchResult.replaceChildren(); }
            let i = index;
            //  let cityresult= this.inputCitynameN[i];
            searchResult.append(`【`);
            searchResult.append(this.inputCitynameN[i]);
            searchResult.append(`】`);
            searchResult.append(document.createElement("br"));
            console.log(this.inputCitynameN[i]);
            this.cityInput = this.inputCitynameN[i];
            this.theChangeIndex =index;
            
          


        },
        getemitM(index) {
           
            if (index!==null || this.theChangeIndex===index ||this.theChangeIndex!==index) { searchResult.replaceChildren(); }

            let i = index;

            searchResult.append(`【`);
            searchResult.append(this.inputCitynameM[i]);
            searchResult.append(`】`);
            searchResult.append(document.createElement("br"));
            console.log(this.inputCitynameM[i]);
            this.cityInput = this.inputCitynameM[i];
            this.theChangeIndex =index;
            
        },
        getemitS(index) {
           
            if (index!==null || this.theChangeIndex===index ||this.theChangeIndex!==index) { searchResult.replaceChildren(); }

            let i = index;

            searchResult.append(`【`);
            searchResult.append(this.inputCitynameS[i]);
            searchResult.append(`】`);
            searchResult.append(document.createElement("br"));
            console.log(this.inputCitynameS[i]);
            this.cityInput = this.inputCitynameS[i];
            this.theChangeIndex =index;

        }, getemitE(index) {
           
            if (index!==null || this.theChangeIndex===index ||this.theChangeIndex!==index) { searchResult.replaceChildren(); }

            let i = index;

            searchResult.append(`【`);
            searchResult.append(this.inputCitynameE[i]);
            searchResult.append(`】`);
            searchResult.append(document.createElement("br"));
            console.log(this.inputCitynameE[i]);
            this.cityInput = this.inputCitynameE[i];
            this.theChangeIndex =index;
        },
        clean() {

            searchResult.replaceChildren();
        }





    },
    // 生命週期
    mounted() {
        // this.fn();


    }
}




</script>


<template>
    <div class="bottom-layer">
        <div class="pic-layer">
            <img src="../../../public/shan/img/683241228.jpg" alt="" class="pic-TW">
        </div>
        <div class="block">
            <!-- @click="changeMove" -->
            <div class="block-btn" @click="changeMove" v-bind:class="{moved: isMove}" title="點擊【北、中、南、東】展開搜尋畫面，二次點擊畫面縮小">
                <div class="explainAndClose">
                    
                    <!-- {{ this.isMove }} -->
                    <div class="topic">
                       
                        <i class="fa-solid fa-circle-check">　選擇『區域』及『縣市』</i>

                        <i class="fa-solid fa-arrow-down"></i>

                        <i class="fa-solid fa-circle-info">　提供蔬果產地的上架資訊</i>


                    </div>
                    <!-- <button type="button" class="closeBtn" title="展開/縮小視窗" v-on:click="pureChange">
                        <i class="fa-sharp fa-solid fa-up-right-from-square"></i>
                    </button> -->
                </div>
                <!-- <buttonView v-for="(item, index) in input" v-bind:district="item.name" @click="getCityIndex(index)" /> -->
                <div class="btn-city-select">
                    <buttonView class="btn" v-bind:district="input[0].name" @click="getCityNorth" />
                    <buttonView class="btn" v-bind:district="input[1].name" @click="getCityMid" />
                    <buttonView class="btn" v-bind:district="input[2].name" @click="getCitySourth" />
                    <buttonView class="btn" v-bind:district="input[3].name" @click="getCityEast" />
                </div>
                <cityBtnView v-bind:getNorth="isNorth" v-bind:getMid="isMid" v-bind:getSourth="isSourth"
                    v-bind:geteast="isEast"  @click="getCityInfo" v-on:emitPush="getemitN"
                    v-on:emitPush1="getemitM" v-on:emitPush2="getemitS" v-on:emitPush3="getemitE" />

                <div class="result-area">
                    <ol class="fs-5" id="searchResult">
                    </ol>
                </div>
                <!-- <button v-if="btnShow" type="button" class="cleaBtn" @click="clean"> <i class="fa-solid fa-rotate-right">重查結果</i></button> -->

            </div>

            <div v-if="isNorth" class="img">
                <img src="../../../public/shan/img/northDisplay.png" alt="" class="imgC">

            </div>
            <div v-if="isMid" class="img">
                <img src="../../../public/shan/img/midDisplay.png" alt="" class="imgC">
            </div>
            <div v-if="isSourth" class="img">
                <img src="../../../public/shan/img/southDisplay.png" alt="" class="imgC">
            </div>
            <div v-if="isEast" class="img">
                <img src="../../../public/shan/img/EastDisplay.png" alt="" class="imgC">
            </div>


        </div>
    </div>
</template>


<style lang="scss" scoped>
.bottom-layer {


    .pic-layer {
        position: absolute;
        // z-index: -1;
    }
}

.block {

    display: flex;
    justify-content: right;
    margin-right: 20px;
    margin-top: -12px;
    .explainAndClose {
        display: flex;
    }

    .closeBtn {
        margin-left: 10px;
        margin-top: 10px;
        height: 30px;
        border-radius: 5px;
        background-color: #403e38;
        color: #d6caab;
        border: 2px solid #2f3130;
        transition: 0.5s;
    }

    .closeBtn:hover {
        background-color: #d6caab;
        color: #2f3130;
        border: 2px solid #2f3130;
    }

    .closeBtn:active {
        scale: 0.5;
    }

    .topic {
        // margin-top: 10px;
        margin-top: 10px;
        width: 12vw;
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px;
        border-radius: 5px;
        border: 2px solid #3d3a34;
    }



    .block-btn {
        border: 2px solid #3d3a34;
        flex-direction: column;
        display: flex;
        // justify-content: center;
        align-items: center;

        width: 15vw;
        height: 20vw;
        background: #d6caab;

        border-radius: 5px;
        position: relative;
        top: 30px;
        left: -12px;
        z-index: 5;
        transition: 1s;

        .btn-city-select {

            margin-top: 10px;
            margin-bottom: 10px;
           
            border-radius: 5px;
            display: flex;
            justify-content: space-evenly;


        }

        .btn {
            margin-top: 2px;
        }



    }

    .moved {
       width: 450px;
       height: 450px;
       display: flex;
       justify-content: center;


    }


    .block-result {
        //原先的預設為空
        // border: 2px solid #3d3a34;
        background: none;
        width: 12vw;
        height: 20vw;
        // background: #d6caab;
        border-radius: 5px;
        position: fixed;
        top: 30px;
        left: 10px;
        z-index: 4;
        transition: 1s;

    }




}


.imgC {
    // width: 30vw;
    position: absolute;
    top: 377px;
    left: 91px;
    // z-index: -1;
    width: 450px;
    height: 450px;
    border-radius: 20px;
    border: 3px solid rgb(73, 49, 144);
    
}

.pic-TW{
    width: 450px;
    height: 450px;
    margin: 30px 21px;
    border-radius: 20px;
    border: 3px solid rgb(73, 49, 144);
    box-shadow: 4px 4px 4px;
}


.result-area {
    border-top: 2px solid #464f3d;

    margin-top: 25px;
    width: 80%;
    height: 20vw;
    
    overflow-y: auto;
}


.cleaBtn {
    margin-top: 30px;
    border: 1px solid #2f3130;
    background: #414949;
    color: rgb(211, 214, 208);
    // width: 14vw;
    height: 2vw;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;

    transition: 0.6s;

}

.cleaBtn:hover {
    background: #babdbc;
    color: rgb(51, 54, 45);
    scale: 1.2;



}

.cleaBtn:active {
    scale: 0.7;
}</style>
