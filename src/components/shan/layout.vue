<script>
import selectionView from './SelectionCard.vue'
import layoutCardView from './layoutCard.vue';
export default {

    components: {
        layoutCardView,
        selectionView

    },
    data() {
        return {
            searchResultArr: [],
            // 購物車清單
            chartResultArr: [],
            searchData: null,
            searchTypeBtn: "搜尋分類",
            searchTypePlace: "產地搜尋",
            searchTypeProduct: "產品搜尋",
            cityValue: null,
            // 起始日期
            startDate: '',
            // 結束日期 
            endDate: '',
            // 是否為無效的起始日期
            isStartDateInvalid: false,
            totalPrice: null,
            isShow: false,
            isPrint: false

        }
    },

    methods: {
        getProductInfo() {
            let body = { //產品名稱
                "name": this.searchData
            }

            fetch("http://localhost:8080/search_specific_product", {
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
                    this.searchResultArr = data.product_list;
                    // console.log(this.searchResultArr)
                })
        },
        getPlaceProductInfo() {
            const tool = document.querySelector("#tool");
            let getCityName = tool.value;
            console.log(getCityName);

            //產品名稱
            let body = {
                "place": getCityName
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
                    console.log(data);
                    this.searchResultArr = data.searchAllRes;
                    console.log(this.searchResultArr)
                })
        },
        //產地搜尋
        changeAndSearchPlace() {

            this.searchTypeBtn = this.searchTypePlace;
            this.isShow = true;
            this.isPrint = false;
            this.getPlaceProductInfo();
        },
        //產品搜尋
        changeAndSearchNmae() {
            this.searchTypeBtn = this.searchTypeProduct;
            this.isShow = false;
            this.isPrint = true;
            this.getProductInfo();
        },
        getDateInfo() {
            console.log(this.startDate);
            console.log(this.endDate);
            if (this.startDate > this.endDate || this.isStartDateInvalid === true) {
                alert('Warning!!! 你提供的日期不符合規定')
            }
            //產品名稱
            let body = {
                "firstDay": this.startDate,
                "endDay": this.endDate
            }

            fetch("http://localhost:8080/search_period", {
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
                    this.searchResultArr = data.product_list;
                    alert(data.message)

                })

        },
        //獲取購物車資料
        getShoppingCar() {
            let body = {
                //需要localstorage資料
                "buyerAccount": localStorage.getItem('email')
            }
            fetch("http://localhost:8080/get_shopping_data", {
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

                    let priceArr = [];
                    let SearchArr = [];
                    console.log(data);
                    SearchArr = data.Shopping_Detail_List;
                    if (!SearchArr == []) {
                        console.log(SearchArr)
                        for (let i = 0; i < SearchArr.length; i++) {
                            let singleTotal;
                            let singalPrice = data.Shopping_Detail_List[i].itemPrice;
                            let singleNum = data.Shopping_Detail_List[i].itemNum;
                            singleTotal = singalPrice * singleNum
                            priceArr.push(singleTotal);
                        }
                    }


                    console.log(priceArr);
                    let totoalCollection = 0;
                    for (let i = 0; i < priceArr.length; i++) {
                        totoalCollection += priceArr[i]

                    }
                    console.log(totoalCollection);
                    this.totalPrice = totoalCollection;
                    //要呈現的清單表不能刪
                    this.chartResultArr = SearchArr;
                    localStorage.setItem((localStorage.getItem("email")), JSON.stringify(this.chartResultArr));
                    // 購物車清單
                    console.log(this.chartResultArr);
                })
        },
        getemit() {  //加入購物車要刷新右邊購物車  
            this.getShoppingCar();
        },
        getSelectemit() {//更新購物車也emit指令
            console.log(`ASD`)
            this.getShoppingCar();
        },
        goCheckOut() {
            if (!this.chartResultArr == "") {

                if (window.confirm("確認前往結帳頁面嗎?") === true) {
                    this.$router.push('/Checkout')
                } else {
                    alert("應該好好思考一番")
                }
            } else {
                alert("購物車為空不能結帳");
            }

        }, watch: {
            startDate(newStartDate) {
                const maxAllowedDate = new Date();
                // 取得 30 天前的日期
                maxAllowedDate.setDate(maxAllowedDate.getDate() - 30);

                if (new Date(newStartDate) < maxAllowedDate) {
                    this.isStartDateInvalid = true;
                } else {
                    this.isStartDateInvalid = false;
                }
            }
        },

        // 生命週期
        mounted() {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            this.startDate = `${year}-${month}-${day}`;
            this.endDate = `${year}-${month}-${day}`;
            this.getShoppingCar();
        },
        updated() {
            // this.getShoppingCar();
        }
    }
}
</script>


<template>
    <div class="search-area">
        <!-- 上方的條件區 -->
        <div class="searchbar">
            <!-- =============================================== -->
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    {{ searchTypeBtn }}
                </button>
                <!-- =========================================================== -->
                <select v-if="isShow" name="" id="tool" v-on:change="changeAndSearchPlace">
                    <option value="嘉義縣">嘉義縣</option>
                    <option value="新北市">新北市</option>
                    <option value="嘉義市">嘉義市</option>
                    <option value="新竹縣">新竹縣</option>
                    <option value="新竹市">新竹市</option>
                    <option value="臺北市">臺北市</option>
                    <option value="臺南市">臺南市</option>
                    <option value="宜蘭縣">宜蘭縣</option>
                    <option value="苗栗縣">苗栗縣</option>
                    <option value="雲林縣">雲林縣</option>
                    <option value="花蓮縣">花蓮縣</option>
                    <option value="臺中市">臺中市</option>
                    <option value="臺東縣">臺東縣</option>
                    <option value="桃園市">桃園市</option>
                    <option value="南投縣">南投縣</option>
                    <option value="高雄市">高雄市</option>
                    <option value="屏東縣">屏東縣</option>
                    <option value="基隆市">基隆市</option>
                    <option value="彰化縣">彰化縣</option>
                    <!-- <option value="澎湖縣">澎湖縣</option> -->
                    <!-- <option value="金門縣">金門縣</option> -->
                    <!-- <option value="連江縣">連江縣</option> -->
                </select>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><button class="dropdown-item" type="button" v-on:click="changeAndSearchPlace">{{ searchTypePlace
                    }}</button></li>
                    <li><button class="dropdown-item" type="button" v-on:click="changeAndSearchNmae">{{
                        searchTypeProduct }}</button></li>

                </ul>
            </div>

            <!-- ============================================================================ -->
            <div v-if="this.isPrint" class="placesearch">
                <input class="searchBar" type="text" name="" id="searchBar" placeholder="產品名稱關鍵字搜尋"
                    v-model="this.searchData">
                <button type="button" class="searchReqBtn" @click="getProductInfo">
                    搜尋
                </button>
            </div>

            <!-- 日期範圍搜尋 -->
            <div class="datesearch">
                <label for="dateFrom">產品日期範圍(起)</label>
                <input type="date" class="form-control" id="dateFrom" name="date" v-model="startDate">
                <label for="dateFrom">產品日期範圍(訖)</label>
                <input type="date" class="form-control" id="dateUtil" name="date" v-model="endDate">
                <span v-if="endDate < startDate" class="error-message">起訖日期順序"不合理"</span>
                <span v-else-if="isStartDateInvalid" class="error-message">查詢30天前生鮮食品為"不合理"</span>
                <button class="dateSearchBtn" @click="getDateInfo">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            <!-- searchbar 尾巴 -->
        </div>
        <!-- search-Area尾巴 -->
    </div>



    <!-- 下方的功能區 -->
    <div class="content-layout">
        <!-- 左邊的功能區 -->
        <div class="background-layout">

            <layoutCardView v-for="item in searchResultArr" v-bind:searchResultcode="item.hsCode"
                v-bind:selleraccount="item.sellerAccount" v-bind:date="item.date" v-bind:description="item.description"
                v-bind:name="item.name" v-bind:number="item.number" v-bind:place="item.place" v-bind:price="item.price"
                v-bind:type="item.type" v-on:emitPushAdd="getemit" />
        </div>

        <!-- 右邊的功能區 -->
        <div class="right-shoppingCart">

            <!-- 購物車區 -->
            <div class="upper-dtail">
                <h5 class="buyerTitle">買家已選清單</h5>
                <selectionView v-for="item in chartResultArr" v-bind:selectShopppingCode="item.shoppingNumber"
                    v-bind:selectId="item.itemId" v-bind:selectName="item.itemName" v-bind:selectNumber="item.itemNum"
                    v-bind:selectPrice="item.itemPrice" v-bind:selectStock="item.stock" v-on:emitPushModi="getSelectemit" />
            </div>
            <!-- 結帳區 -->
            <div class="bottom-total">
                <div class="price-total">
                    <h4>購物車總金額:</h4>
                    <h4 class="text-danger">{{ this.totalPrice }}</h4>
                </div>
                <div>
                    <button class="checkbtn" type="button" @click="goCheckOut">前往結帳</button>
                </div>
            </div>

        </div>
    </div>
</template>


<style lang="scss" scoped>
.content-layout {
    display: flex;

    .background-layout {
        flex-wrap: wrap;
        flex-direction: column;
        display: flex;
        justify-content: left;
        align-items: start;

        border-radius: 5px;
        width: 37vw;
        height: 80vh;
        background: #ffffff;
        overflow-y: auto;
        margin-right: 3vw;
    }

    .right-shoppingCart {
        flex-direction: column;
        display: flex;
        // justify-content: center;
        align-items: center;

        .upper-dtail {
            width: 35vw;
            height: 45vh;
            background: #ffffff;
            border-radius: 5px;
            overflow-y: auto;


        }

        .bottom-total {
            width: 35vw;
            height: 30vh;
            background: #ffffff;
            border-radius: 5px;
            margin-top: 30px;
            flex-direction: column;
            display: flex;
            justify-content: center;
            align-items: center;
        }

    }
}

select {
    height: 2vw;
    border-radius: 5px;
}

.search-area {
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}

#tool {
    margin: 10px;
}

.searchbar {
    width: 90%;
    height: 3.5rem;
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 18px;
    border-radius: 30px;
    border: 2px solide rgb(45, 50, 46);
    padding: 15px;

    .searchBar {
        border-radius: 30px;
        border: 2px solid rgb(67, 90, 72);
        outline: none;

    }

}

.label {
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.datesearch {
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.searchIcon {
    margin: 5px;
    width: 2vw;
    height: 2vw;
    border-radius: 50px;
    border: 2px solid rgb(67, 90, 72);
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(67, 90, 72);
}

label {

    width: 100px;
    padding: 15px;
    color: rgb(88, 161, 62);

    font-weight: bold;
    font-size: 16px;
    // margin-right: 30px;
}

input {
    text-align: center;
    border: none;
    width: 20vw;
    height: 2vw;
    // margin-right: 50px;
}

.searchReqBtn {
    background-color: rgb(67, 90, 72);
    border-radius: 25px;
    color: rgb(223, 226, 224);
    transition: 0.6s;
    width: 120px;
    padding: 6px;
    margin-left: 15px;
}

.searchReqBtn:hover {
    background-color: rgb(253, 253, 253);
    color: rgb(72, 78, 74);
    scale: 1.2;
}

.searchReqBtn:active {
    scale: 0.9;
}

.form-control {
    width: 8vw;
    border: 2px solid rgb(67, 90, 72);
}

.error-message {
    color: red;
    font-size: 16px;
}

.dateSearchBtn {
    width: 2vw;
    height: 2vw;
    border-radius: 50%;
    border: 2px solid rgb(229, 235, 230);
    background: rgb(67, 90, 72);
    color: antiquewhite;
    transition: 1s;

}

.dateSearchBtn:hover {
    background: rgb(176, 185, 178);
    color: rgb(48, 47, 46);
}

.dateSearchBtn:active {
    scale: 0.6;
}

.price-total {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
}

.checkbtn {
    background: #273229;
    color: #ffffff;
    border-radius: 5px;
    transition: 0.6s;

}

.checkbtn:hover {
    background: #ffffff;
    color: #273229;
}

.checkbtn:active {
    scale: 0.7;
}
</style>
