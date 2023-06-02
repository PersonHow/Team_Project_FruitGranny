<script>
import { RouterLink, RouterView } from 'vue-router';
export default {

    data() {
        return {
            // 註冊相關資訊
            // 使用者名稱
            userName: null,
            // 使用者密碼
            pwd: null,
            // 確認密碼
            conPwd: null,
            // Email
            email: null,
            // 手機號碼
            phone: null,
            // 地址
            address: '',
            autocomplete: 'off',

            cities: ['台北市', '新北市', '桃園市', '台中市', '台南市', '高雄市'],
            selectedCity: '',
            cAddress: '',
            finalAddress: ''
        }
    },
    watch: {
        selectedCity(value) {
            this.finalAddress = value + this.cAddress + this.address;
        },
        cAddress(value){
            this.finalAddress = this.selectedCity + value + this.address;
        },
        address(value) {
            this.finalAddress = this.selectedCity + this.cAddress + value;
        }
    },
    methods: {

        setInfo() {
            
            let body = {
                "email": this.email,
                "account": this.userName,
                "password": this.pwd,
                "confirm_password": this.conPwd,
                "phone": this.phone,
                "address": this.finalAddress
            }
            fetch("http://localhost:8080/set_info", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify(body)
            })
            .then(res => res.json())
            .then(data => {
                alert(data.message);                                                                
                if(data.message === "修改成功"){
                    // localStorage.setItem("user_name", data.member.account);
                    this.$router.push('/original-info');
                    
                    setTimeout(() => {
                        this.$router.go(0);
                        }, 100);
                }
            })
            .catch(err => {

            })
        }
    },
    computed: {
        districts() {
            if (this.selectedCity === '台北市') {
                return ['中正區', '大同區', '松山區'];
            }
            else if (this.selectedCity === '新北市') {
                return ['板橋區', '新莊區', '永和區'];
            }
            else if (this.selectedCity === '桃園市') {
                return ['桃園區', '中壢區', '平鎮區'];
            }
            else if (this.selectedCity === '台中市') {
                return ['北屯區', '龍井區', '西屯區'];
            } 
            else if (this.selectedCity === '台南市') {
                return ['永康區', '中西區', '北區區'];
            } 
            else if (this.selectedCity === '高雄市') {
                return ['仁武區', '三民區', '鹽程區'];
            } 
            else {
                return [];
            }
        },
    },
    mounted(){
        this.email = localStorage.getItem("email");
        this.finalAddress = this.selectedCity + this.cAddress + this.address;
    },
    updated(){
        // this.setInfo();
    }
}
</script>


<template>
    <!-- font-awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <div class="setInfo-box">

        <div class="set-info">
            <h1>個人資料變更</h1>
            <p>請輸入欲更改的項目</p>

            <!-- 帶入指定的email -->
            <form class="email-area">
                <div>
                    <i class="fa-solid fa-at"></i>
                    <label for="email">　</label>
                    <input type="text" id="email" v-model="email" 
                    readonly>
                </div>
            
            </form>
            <hr>
            <!-- 手動輸入區域 -->
            <form class="input-area">
                <div>
                    <i class="fa-regular fa-user"></i>
                    <label for="userName">　</label>
                    <input type="text" id="userName" placeholder="User Name" v-model="userName" :autocomplete="autocomplete">
                </div>
                
                <div>
                    <i class="fa-solid fa-unlock-keyhole"></i>
                    <label for="password">　</label>
                    <input type="password" id="password" placeholder="Password (英數字相加須大於6個字元)" v-model="pwd">
                </div>

                <div>
                    <i class="fa-solid fa-lock"></i>
                    <label for="ConfirmPassword">　</label>
                    <input type="password" id="ConfirmPassword" placeholder="Confirm Password (請輸入相同的密碼)" v-model="conPwd">
                </div>

                <div>
                    <i class="fa-solid fa-mobile-screen-button"></i>
                    <label for="phontNumber">　</label>
                    <input type="text" id="phontNumber" placeholder="Phone Number (台灣手機格式)" v-model="phone" :autocomplete="autocomplete">
                </div>

                <div>
                <div class="address-area">
                    <i class="fa-regular fa-address-card"></i>
                    <label for="address">　</label>
                    <select id="city" v-model="selectedCity" @change="resetAddress">
                        <option value="">請選擇縣市</option>
                        <option v-for="city in cities" :value="city">{{ city }}</option>
                    </select>
                    <select id="district" v-model="cAddress" :disabled="!selectedCity">
                        <option value="">請選擇地區</option>
                        <option v-for="district in districts" :value="district">{{ district }}</option>
                    </select>
                    <input type="text" id="address" placeholder="　Address" 
                    v-model="address"
                    :autocomplete="autocomplete">
                </div>
                </div>
            

            </form>

            <!-- 修改按鈕 -->
            <button type="button" class="setBtn" @click="setInfo">確認修改</button>

            <h2 class="message">
                <RouterLink to="/original-info">
                    <button type="button" class="homeBtn">
                        回前頁
                        <i class="fa-solid fa-rotate-left"></i>
                    </button>
                </RouterLink>
            </h2>
        </div>
    </div>

</template>


<style lang="scss" scoped>
    .setInfo-box{
        width: 700px;

        .set-info{
            text-align: center;
            padding: 30px;
            background: white;
            border-radius: 20px;
            color: #444;

            h1{
            font-size: 28pt;
            font-weight: normal;
            margin-bottom: 15px;
            }

            p{
                font-size: 11pt;
                margin-bottom: 25px;
            }
            .email-area{
                margin-bottom: 10px;

                input{
                    border: 0;
                    border-bottom: 2px solid rgba(0,0,0,.1);
                    outline: none;
                    color: rgba(81, 80, 80, 0.791);
                    cursor: default;
                }
                
            }

            .input-area{

                input{
                    margin-top: 30px;
                    height: 40px;
                    width: 70%;
                    border: 0;
                    border-bottom: 2px solid rgba(0,0,0,.1);
                    outline: none;

                    &:focus{
                        border-bottom: 2px solid rgba(81, 80, 80, 0.791); 
                        }
                }
            }

            .address-area{

                select{
                    height: 30px;
                    font-size: 15px;
                }

                input{
                    width: 40%;
                }
            }

            .setBtn{
                margin: 60px auto 50px auto;
                padding: 12px 35px;
                border-radius: 20px;
                border: none;
                background: #333;
                color: white;
                transition: 0.3s;

                &:hover{
                    background: #555;
                }

                &:active{
                    scale: 0.95;
                }
            }

            .message{
                font-size: 10px;
                text-align: right;
                color: rgba(47, 54, 64, 1.0);

                .homeBtn{
                    border: 1px solid #999;
                    border-radius: 5px;
                    padding: 5px 10px;
                    background-color: #fff;
                }
            }
        }
    }
</style>