<script>
    import { RouterLink, RouterView } from 'vue-router'
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

                addInfo() {
                    let body = {
                        "member_list":[{
                            "account": this.userName,
                            "password": this.pwd,
                            "confirm_password": this.conPwd,
                            "email": this.email,
                            "phone": this.phone,
                            "address": this.address
                        }]
                    }
                    fetch("http://localhost:8080/sign_up", {
                        method: "POST",
                        headers: {
                            "Content-Type": "Application/json",
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
            },
            mounted() {

            } 
        }
</script>


<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <div class="signup-box">

        <div class="signup">
            <h1>註冊</h1>
            <p>Hello! Welcome to join us!</p>
            <form>
                <div>
                    <i class="fa-regular fa-user"></i>
                    <label for="userName">　</label>
                    <input type="text" id="userName" placeholder="User Name" v-model="userName">
                </div>
               
                <div>
                    <i class="fa-solid fa-at"></i>
                   <label for="email">　</label>
                   <input type="text" id="email" placeholder="E-mail" v-model="email">
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

            <button type="button" class="addBtn" @click="addInfo">確認註冊</button>

            <h2 class="message">
                <RouterLink to="/log-in">返回登入</RouterLink>
            </h2>
        </div>

        <RouterView />
    </div>
</template>


<style lang="scss" scoped>
.signup-box{
    width: 650px;
    .signup{
        text-align: center;
        padding: 30px;
        color: #444;
        background: white;
        border-radius: 20px;
        overflow: auto;

        h1{
            font-size: 18pt;
            font-weight: normal;
            margin-bottom: 15px;
        }

        p{
            font-size: 10pt;
            margin-bottom: 25px;
        }

        form{

            input{
                margin-bottom: 20px;
                height: 40px;
                width: 80%;
                border: 0;
                border-bottom: 2px solid rgba(0,0,0,.1);
                outline: none;

                &:focus{
                        border-bottom: 2px solid rgba(81, 80, 80, 0.791); 
                    }

            }
        }

        .addBtn{
            // display: block;
            margin: 0 auto 20px auto;
            // outline: none;
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
                // font-weight: normal;
                text-align: right;
                color: rgba(47, 54, 64, 1.0);
            }
    }        
}


</style>