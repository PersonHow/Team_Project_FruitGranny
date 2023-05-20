<script>
    import { RouterLink, RouterView } from 'vue-router'
    import LoginTitle from './LoginTitle.vue';
    export default {
        components: {
            LoginTitle
        },
        data() {
            return {
                user_name: null,
                user_account: null
            }
        },
        methods: {
            signOut(){
                localStorage.clear();
                location.reload();
            },
            getAccount(user){
                this.user_account = user;
            }
        },
        mounted() {
            this.user_name = localStorage.getItem("user_name");
            // console.log(this.user_name)
        } 
    }
</script>

<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <div class="headerArea">

        <div class="logo">
            <RouterLink to="/" class="link"><img src="../../../public/tsai/img/Logo.png" alt=""></RouterLink>
        </div>

        <nav>
            <div class="all-area">

                <div v-if="user_name" class="userBtn-area">

                    <p class="user" 
                    :user_account="user_account"
                    @success="getAccount"
                    >Hi,　{{ user_name }}　｜
                
                    <button type="button" @click="signOut"
                    class="btn"
                    >登出</button>

                    </p>
                    
                    <!-- <LoginTitle :user_account="user_account"
                    @success="getAccount" /> -->


                    <RouterLink to="/set-info" class="setInfo  btn btn-outline-secondary">
                    <i class="fa-solid fa-user-pen"></i>　修改個人資料</RouterLink>
                </div>

                <div v-else>
                    <RouterLink to="/log-in" class="custom-btn btn-13">
                        <i class="fa-regular fa-user"></i>
                        ｜ Login
                    </RouterLink>
                </div>
            </div>
            
            
            
        </nav>

    </div>
</template>


<style lang="scss" scoped>
    .headerArea{
        padding: 20px 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #e2e1e1;

        .logo{
            width: 170px;
            height: 170px;
            background-color: #f8f7f7;
            // box-shadow: 6px 3px 6px #555;
            border: 4px dashed #555;
            border-radius: 85px;

            img{
                width: 150px;
                height: 150px;
                padding-top: 10px;
            }
        }

        .link {
            // display: block;
            padding: 8px;
            // // width: 30px;
            // font-size: 30pt;
            // height: 20px;
            // border-radius: 5px;
            // color: white;
            // text-decoration: none;
            // // background-color: rgb(64,90,134);
            
            &:hover{
                cursor: pointer;
            }
        }

        .all-area{
            .userBtn-area{
                
                display: flex;
                flex-direction: column;
                align-items: end;
                .user{
                    font-size: 23px;
                    font-family: "Cormorant Garamond", serif;
                    color: rgb(49, 75, 75);
                    margin-bottom: 40px;
                }
        
                .setInfo{
                    margin-bottom: -30px;
                    text-decoration: none;
                    font-size: 14px;

                }
                .btn{
                    height: 40px;
                }
            }
            

            .custom-btn {
                width: 140px;
                height: 45px;
                color: #fff;
                text-decoration: none;
                border-radius: 5px;
                padding: 10px 25px;
                font-family: 'Lato', sans-serif;
                font-weight: 500;
                background: transparent;
                cursor: pointer;
                transition: all 0.3s ease;
                position: relative;
                display: inline-block;
                box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
                7px 7px 20px 0px rgba(0,0,0,.1),
                4px 4px 5px 0px rgba(0,0,0,.1);
                outline: none;
            }

            .btn-13 {
                background-color: #89d8d3;
                background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
                border: none;
                z-index: 1;
            }
            .btn-13:after {
                position: absolute;
                content: "";
                width: 100%;
                height: 0;
                bottom: 0;
                left: 0;
                z-index: -1;
                border-radius: 5px;
                background-color: #4dccc6;
                background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
                box-shadow:
                -7px -7px 20px 0px #fff9,
                -4px -4px 5px 0px #fff9,
                7px 7px 20px 0px #0002,
                4px 4px 5px 0px #0001;
                transition: all 0.3s ease;
            }
            .btn-13:hover {
                color: #fff;
            }
            .btn-13:hover:after {
                top: 0;
                height: 100%;
            }
            .btn-13:active {
            top: 2px;
            }

            
        }
        

    }
</style>