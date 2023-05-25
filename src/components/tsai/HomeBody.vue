<script>
export default {
    data(){
        return {

        }
    },
    methods: {
    },
    mounted() {
        
    }
    
}

</script>

<template>
     <!-- Animate.css v3.5.2 -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" rel="stylesheet"  />

    <div class="homeBody">
        
        <!-- picArea -->
        <div class="picArea">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="https://www.oyasai.co.jp/media/20190526-110810-802.jpg" class="d-block w-100" alt="">
                </div>
                <div class="carousel-item">
                    <img src="https://imageio.forbes.com/specials-images/imageserve/606779e436047d3120d4c89c/0x0.jpg?format=jpg&width=1200" class="d-block w-100" alt="">
                </div>
                <div class="carousel-item">
                    <img src="https://media1.moneywise.com/a/23305/farmland-post-pandemic-portfolio_full_width_2_1200x500_v20220923231108.jpg" alt="">
                </div>
                <div class="carousel-item">
                    <img src="https://www.healthifyme.com/blog/wp-content/uploads/2022/04/shutterstock_1198340449-1.jpg" class="d-block w-100" alt="">
                </div>
            </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
    
    <!-- chooseArea -->
    <div class="chooseArea">
    
        <div class="chooseCard">
            <RouterLink to="/seller" class="custom-btn btn-5">供應商</RouterLink>
            <div class="pic">
                <img class="animate flipInY" src="https://t4.ftcdn.net/jpg/04/42/11/53/360_F_442115393_umFt4eV1asDjcvpG4g7hylxuw7nCD8Oo.jpg" alt="seller">
            </div>

        </div>
            
        <div class="chooseCard">
            <RouterLink to="/buyer" class="custom-btn btn-5">消費者</RouterLink>
            <div class="pic">
                <img class="animate flipInY" src="https://www.prakati.in/wp-content/uploads/2021/06/Featured-Image-Reusable-Vegetable-Storage-Bags-markus-spiske-unsplash.jpg" alt="buyer">
            </div>
        </div>    
    </div>
    
    <!-- move box -->
    <div class="move-box">
        <RouterLink to="/buyer">
            <img src="https://shoplineimg.com/61aee0defaf6dc003221bdfe/62296315aa9fc20032e2ab8c/800x.png?" alt="生產履歷">
        </RouterLink>   
        <p>生產履歷</p>
        
    </div>

</template>



<style lang="scss" scoped>

    .homeBody{
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
        // margin: 0 60px;
        border-bottom: inset;
        padding: 7px 0 26px 0;
        .picArea{
            width: 80vw;

            img{
                height: 580px;
            }
        }
    }
    .chooseArea{
        margin-top: 50px;
        margin-bottom: 50px;
        display: flex;
        justify-content: space-evenly;
        
        .chooseCard{

            .custom-btn {
                font-size: 25pt;
                text-align: center;
                text-decoration: none;
                color: #fff;
                border-radius: 5px;
                font-family: 'Lato', sans-serif;
                // cursor: pointer;
                transition: all 0.3s ease;
                position: relative;
                display: inline-block;
                box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
                7px 7px 20px 0px rgba(0,0,0,.1),
                4px 4px 5px 0px rgba(0,0,0,.1);
                outline: none;

                &:active{
                    scale: 0.95;
                }

            }

            .btn-5 {
                width: 450px;
                height: 70px;
                padding: 10px;
                border: none;
                background: linear-gradient(0deg, #3dc4b0 0%, #fbb97c 100%);
            }
            .btn-5:hover {
                color: #2a9a89;
                background: transparent;
                box-shadow: none;
            }
            .btn-5:before, .btn-5:after{
            content:'';
                position: absolute;
                top: 0;
                right: 0;
                height: 2px;
                width: 0;
                background: #2a9a89;
                box-shadow:
                -1px -1px 5px 0px #fff,
                7px 7px 20px 0px #0003,
                4px 4px 5px 0px #0002;
                transition: 400ms ease all;
            }
            .btn-5:after{
                right:inherit;
                top:inherit;
                left:0;
                bottom:0;
            }
            .btn-5:hover:before, .btn-5:hover:after{
                width:100%;
                transition:800ms ease all;
            }

            .pic{
                margin-top: 15px;

                img{
                    width: 450px;
                    height: 380px;
                    box-shadow: 8px 8px 8px #666;
                    border-radius: 10px;
                    opacity: 0.8;

                    // :hover{
                        animation-duration: 4s;
                        animation-iteration-count: 3;
                    // }
                }
            }
        }
    }

    .move-box{
        width: 120px;
        height: 150px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 5px 5px 5px #333;
        position: fixed;
        bottom: 50px;
        right: 40px;
        z-index: 100;
    
        img{
            width: 120px;
        }

        p{
            text-align: center;
            font-size: 15px;
            background-color: #555;
            color: white;
            border-radius: 5px;
        }
    }



</style>