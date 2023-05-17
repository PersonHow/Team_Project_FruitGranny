<script>

</script>

<template>
    <div class="main">
        <div class="result">
            <label for=""></label>
            <input type="checkbox">
            <h1>1</h1>
            <img src="https://www.verywellfit.com/thmb/qeIiD7JDWsOr4_Ymg4GCaxhhOZs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Bananas-5c6a36a346e0fb0001f0e4a3.jpg" alt="">
            <h2>品名</h2>
            <button type="button" class="deleteC">移除購物車</button>
        </div>
        <div class="result">
            <label for=""></label>
            <input type="checkbox">
            <h1>2</h1>
            <img src="https://www.verywellfit.com/thmb/qeIiD7JDWsOr4_Ymg4GCaxhhOZs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Bananas-5c6a36a346e0fb0001f0e4a3.jpg" alt="">
            <h2>品名</h2>
            <button type="button" class="deleteC">移除購物車</button>
        </div>
        <div type="button" class="result">
            <label for=""></label>
            <input type="checkbox">
            <h1>3</h1>
            <img src="https://www.verywellfit.com/thmb/qeIiD7JDWsOr4_Ymg4GCaxhhOZs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Bananas-5c6a36a346e0fb0001f0e4a3.jpg" alt="">
            <h2>品名</h2>
            <button type="button" class="deleteC">移除購物車</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .main{
        width: 100%;
        background-color: #666;
        // padding: 1rem;
        // display: block;
        margin: auto;
        // margin-top: 20px;
        height: 100%; 
        overflow: auto;
        border: 1px solid black;
        .result{
            display: flex;
            justify-content: space-between;
            // line-height: 1.5;
            padding: 1rem;
            align-items: center;
            

            h1{
            color: white;
            margin-right: 8px;
            }

            img{
                margin-right: 8px;
                width: 100px;
                height: 100px;
            }

            button{
                margin-right: 8px;
                display: block;
                width: 100px;
                height: 50px;
            }
        }

    }
</style>