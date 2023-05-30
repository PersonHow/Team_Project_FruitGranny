<script>
    import { RouterLink, RouterView } from 'vue-router'
    export default {
        components: {
        },
        // props: ['user_account'],
        data() {
            return {
                user_name: null,
                user_account: null
            }
        },
        methods: {

            signOut(){
                // 清除localStorage裡的資料
                localStorage.clear();
                // 導向首頁
                this.$router.push('/');
                // 重整頁面
                setTimeout(() => {
                    window.location.reload();
                }, 100);
                
            },
            // getAccount(newName){
            //     console.log(newName)
            //     this.user_account = newName;
            // },
            fetchData(){
                let body = {
                    "email": localStorage.getItem("email"),
                    "password": localStorage.getItem("password"),
                }
                fetch("http://localhost:8080/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "Application/json"
                    },
                    body: JSON.stringify(body)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    console.log("111")
                    this.user_account = data.member.account;
                })
                .catch(err => {

                })
            }
        },
        updated(){
            this.fetchData();
        },
        mounted() {
            // get出 localStorage 的 user_name
            this.user_name = localStorage.getItem("user_name");
            // this.fetchData();
        },
        
    }
</script>

<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <div class="headerArea">

        <div class="logo">
            <RouterLink to="/" class="link"><img class="logoLink" src="../../../public/tsai/img/Logo.png" alt=""></RouterLink>
        </div>

        <RouterLink to="/" rel="stylesheet" class="link">
            <div class="wrapper">
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <span class="fill-text" data-text="Welcome">Welcome</span>
            </div>
        </RouterLink>

        <nav>
            <div class="all-area">

                <div v-if="user_name" class="userBtn-area">

                    <p class="user"
                    >Hi,　{{ user_account }}　｜
                
                    <button type="button" @click="signOut"
                    class="btn"
                    >登出</button>
                    </p>
            
                    <RouterLink to="/original-info" class="setInfo  btn btn-outline-secondary">
                    <i class="fa-solid fa-user-pen"></i>　個人資料</RouterLink>
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

            .logoLink{
                animation: rotation 5s infinite linear;
                // transition: 2s;

                &:hover{
                    animation: rotation 0s infinite linear;
                }
            }
            @keyframes rotation {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(359deg);
                }
            }

            
        }
        .link{
            padding: 8px;
            text-decoration: none;
            
        }

        .logoLink{
                animation: rotation 5s infinite linear;
                // transition: 2s;

                &:hover{
                    animation: rotation 0s infinite linear;
                }
        }

        @keyframes rotation {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(359deg);
                }
            }

        .wrapper {
            --text-color: #1a1a1a;
            position: relative;
            
            a {
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 1;
                
                &:nth-child(1) { // top triangle
                -webkit-clip-path: polygon(0 0, 100% 0, 50% 50%);
                clip-path: polygon(0 0, 100% 0, 50% 50%);
                }
                
                &:nth-child(2) { // right triangle
                -webkit-clip-path: polygon(100% 0, 100% 100%, 50% 50%);
                clip-path: polygon(100% 0, 100% 100%, 50% 50%);
                }
                
                &:nth-child(3) { // bottom triangle
                -webkit-clip-path: polygon(0 100%, 50% 50%, 100% 100%);
                clip-path: polygon(0 100%, 50% 50%, 100% 100%);
                }
                
                &:nth-child(4) { // left triangle
                -webkit-clip-path: polygon(0 0, 50% 50%, 0 100%);
                clip-path: polygon(0 0, 50% 50%, 0 100%);
                }
                
                &:hover {
                -webkit-clip-path: none;
                clip-path: none;
                z-index: 2;
                }
                
                &:nth-child(1):hover ~ .fill-text { // top triangle
                
                &:before {
                    --fill-from: circle(0% at 50% 0%);
                    --fill-to: circle(150% at 0% 50%);
                    animation: fill-text 1s forwards;
                }
                
                &:after {
                    --hover-text: "Aloha！";
                }
                }
                
                &:nth-child(2):hover ~ .fill-text { // right triangle
                
                &:before {
                    --fill-from: circle(0% at 150% 50%);
                    --fill-to: circle(100% at 50% 50%);
                    animation: fill-text 1s forwards;
                }
                
                &:after {
                    --hover-text: "こんにちは！";
                }
                }
                
                &:nth-child(3):hover ~ .fill-text { // bottom triangle
                
                &:before {
                    --fill-from: circle(0% at 50% 100%);
                    --fill-to: circle(150% at 0% 50%);
                    animation: fill-text 1s forwards;
                }
                
                &:after {
                    --hover-text: "Hi！";
                }
                }
                
                &:nth-child(4):hover ~ .fill-text { // left triangle
                
                &:before {
                    --fill-from: circle(0% at 0% 50%);
                    --fill-to: circle(150% at 0% 50%);
                    animation: fill-text 1s forwards;
                }
                
                &:after {
                    --hover-text: "你好！";
                }
                }
            }
            }

            @keyframes fill-text {
                0% {
                    clip-path: var(--fill-from);
                }
                
                100% {
                    clip-path: var(--fill-to);
                    color: var(--text-color);
                }
            }

            .fill-text {
                color: transparent;
                -webkit-text-stroke: 1px var(--text-color);
                font-size: 150px;
                font-family: 'cardo', serif;
            
            &:before {
                content: attr(data-text);
                position: absolute;
            }
            
            &:after {
                --hover-text: "to Fruit Granny";
                content: var(--hover-text);
                -webkit-text-stroke: initial;
                font: 2.5vw/1.5 verdana;
                color: #999;
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translatex(-50%);
                white-space: nowrap;
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