<script>
</script>

<template>

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
        <!-- chooseArea -->
    </div>
    
    <div class="chooseArea">
    
        <div class="chooseCard">
            <!-- <button type="button" class="chooseBtn">供應商</button> -->
            <RouterLink to="/seller" class="chooseBtn">供應商</RouterLink>
            <div class="pic">
                <img src="https://t4.ftcdn.net/jpg/04/42/11/53/360_F_442115393_umFt4eV1asDjcvpG4g7hylxuw7nCD8Oo.jpg" alt="">
            </div>

        </div>
            
        <div class="chooseCard">
            <!-- <button type="button" class="chooseBtn">消費者</button> -->
            <RouterLink to="/buyer" class="chooseBtn">消費者</RouterLink>
            <div class="pic">
                <img src="https://www.prakati.in/wp-content/uploads/2021/06/Featured-Image-Reusable-Vegetable-Storage-Bags-markus-spiske-unsplash.jpg" alt="">
            </div>
        </div>

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

            .chooseBtn{
                // width: 450px;
                height: 95px;
                font-size: 25pt;
                color: white;
                background-color: #999;
                border: none;
                border-radius: 15px;
                transition: 0.3s;
                box-shadow: 8px 8px 8px #666;
                text-decoration: none;
                display: block;
                padding: 1rem;
                text-align: center;

                &:hover{
                    background: #222;
                    border: 2px solid white;
                }

                &:active{
                    scale: 0.95;
                }
            }

            .pic{
                margin-top: 15px;

                img{
                    width: 450px;
                    height: 380px;
                    box-shadow: 8px 8px 8px #666;
                    border-radius: 10px;

                }
            }
        }
    }

</style>