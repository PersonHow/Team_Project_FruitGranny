<script>
import { RouterLink, RouterView } from 'vue-router';
export default {

    data() {
        return {
            userName: localStorage.getItem("user_name"),
            pwd: null,
            conPwd: null,
            email: localStorage.getItem("email"),
            phone: localStorage.getItem("phone"),
            address: localStorage.getItem("address")
        }
    },
    methods: {

    },
    mounted(){
        
    }
}
</script>


<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <div class="setInfo-box">

        <div class="set-info">
            <h1>個人資料</h1>
            
            <!-- 個人資料區域 -->
            <form class="info-area">
                <div>
                    <i class="fa-regular fa-user"></i>
                    <label for="userName">　</label>
                    <input type="text" 
                    id="userName" 
                    v-model="userName" 
                    readonly>
                </div>

                <div>
                    <i class="fa-solid fa-at"></i>
                    <label for="email">　</label>
                    <input type="text" 
                    id="email" 
                    v-model="email" 
                    readonly>
                </div>

               <div>
                    <i class="fa-solid fa-mobile-screen-button"></i>
                    <label for="phontNumber">　</label>
                    <input type="text" 
                    id="phontNumber" 
                    v-model="phone"
                    readonly>
               </div>
            
               <div>
                    <i class="fa-regular fa-address-card"></i>
                    <label for="address">　</label>
                    <input type="text" 
                    id="address" 
                    v-model="address" 
                    readonly>
               </div>

            </form>

            <!-- 前往修改個人資料按鈕 -->
            <RouterLink to="/set-info">
            <button type="button" class="setBtn">個人資料變更
            <i class="fa-solid fa-arrow-right"></i>
            </button></RouterLink>

            <h2 class="message">
                <RouterLink to="/">
                    <button type="button" class="homeBtn">
                        回主頁
                        <i class="fa-solid fa-house"></i>
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
            margin: 30px 0 55px 0;
            }

            p{
                font-size: 11pt;
                margin-bottom: 25px;
            }

            .info-area{

                input{
                    margin-top: 30px;
                    height: 40px;
                    width: 60%;
                    border: 0;
                    border-bottom: 2px solid rgba(0,0,0,.1);
                    outline: none;
                    cursor: default;
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