<script>
import { RouterLink, RouterView } from 'vue-router';
export default {

    data() {
        return {
            userName: null,
            pwd: null,
            conPwd: null,
            email: null,
            phone: null,
            address: null
        }
    },
    methods: {

        setInfo() {
            let body = {
                "account": this.userName,
                "password": this.pwd,
                "confirm_password": this.conPwd,
                "email": this.email,
                "phone": this.phone,
                "address": this.address
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
            })
            .catch(err => {

            })
        }
    }
}
</script>


<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <div class="setInfo-box">

        <div class="set-info">
            <h1>修改個人資料</h1>
            <p>1、輸入E-mail　2、輸入欲更改的項目</p>
            <form class="email-area">
                <div>
                    <i class="fa-solid fa-at"></i>
                   <label for="email">　</label>
                   <input type="text" id="email" placeholder="E-mail" v-model="email">
               </div>
               
            </form>
            <hr>
            <form class="input-area">
                <div>
                    <i class="fa-regular fa-user"></i>
                    <label for="userName">　</label>
                    <input type="text" id="userName" placeholder="User Name" v-model="userName">
                </div>
                
               <div>
                   <i class="fa-solid fa-unlock-keyhole"></i>
                   <label for="password">　</label>
                   <input type="password" id="password" placeholder="Password" v-model="pwd">
               </div>

               <div>
                    <i class="fa-solid fa-lock"></i>
                    <label for="ConfirmPassword">　</label>
                    <input type="password" id="ConfirmPassword" placeholder="Confirm Password" v-model="conPwd">
               </div>

               <div>
                    <i class="fa-solid fa-mobile-screen-button"></i>
                    <label for="phontNumber">　</label>
                    <input type="text" id="phontNumber" placeholder="Phone Number" v-model="phone">
               </div>
            
               <div>
                    <i class="fa-regular fa-address-card"></i>
                    <label for="address">　</label>
                    <input type="text" id="address" placeholder="Address" v-model="address">
               </div>

            </form>

            <button type="button" class="setBtn" @click="setInfo">確認修改</button>

            <h2 class="message">
                <RouterLink to="/">返回主頁</RouterLink>
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

                    &:focus{
                        border-bottom: 2px solid rgba(238, 33, 33, 0.791); 
                        }
                }
                
            }

            .input-area{

                input{
                    margin-top: 30px;
                    height: 40px;
                    width: 60%;
                    border: 0;
                    border-bottom: 2px solid rgba(0,0,0,.1);
                    outline: none;

                    &:focus{
                        border-bottom: 2px solid rgba(81, 80, 80, 0.791); 
                        }
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
                font-size: 10pt;
                text-align: right;
                color: rgba(47, 54, 64, 1.0);
            }
        }
    }
</style>