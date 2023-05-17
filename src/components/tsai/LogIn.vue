<script>
    import { RouterLink, RouterView } from 'vue-router'
    // import Header 
    export default {
            
            data() {
                return {
                }
            },
            methods: {
                message() {
                    alert("Hello! Welcome~")
                }
            },
            mounted() {

            } 
        }
</script>


<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <div class="login-box">
        <div class="login">
            <h1>登入</h1>
            <p>Hello!!</p>
            <form>
                <div>
                    <i class="fa-regular fa-user"></i>
                    <label for="userName">　</label>
                    <input type="text" id="userName" placeholder="User Name">
                </div>

               <div>
                    <i class="fa-solid fa-at"></i>
                   <label for="email">　</label>
                   <input type="text" id="email" placeholder="E-mail">
               </div>
                
               <div>
                   <i class="fa-solid fa-unlock-keyhole"></i>
                   <label for="password">　</label>
                   <input type="password" id="password" placeholder="Password">
               </div>
                
            </form>

            <button type="start" class="loginBtn" @click="message">登入</button>

            <h2 class="message">
                <p>還沒有帳號嗎？
                    <RouterLink to="/signup"> 按此註冊</RouterLink>
                </p>
                <RouterLink to="/">返回主頁</RouterLink>
            </h2>
        </div>
        
        <RouterView />
    </div>
</template>


<style lang="scss" scoped>
    .login-box{
        width: 650px;
        .login{
            // position: relative;
            text-align: center;
            padding: 30px;
            color: #444;
            background: white;
            border-radius: 20px;
            // overflow: auto;

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
                margin-bottom: 15px;

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

            .loginBtn{
                margin: 0 auto 20px auto;
                padding: 10px 50px;
                border-radius: 20px;
                border: none;
                transition: 0.3s;
                border: 2px #333 solid;

                &:hover{
                    background: #d9d9d9;
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