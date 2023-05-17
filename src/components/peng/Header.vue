<script>

</script>

<template>
    <div class="pengTitle">
        <div class="header">
            <input type="text">
            <div class="btnS">
                <button type="button">搜尋</button>
            </div>
        </div>
        <div class="purchase">
            <button type="button" class="btnP">結帳</button>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
.pengTitle{
width:100%;
display: flex;


    .header{
        width: 50%;
        background-color: #666;
        padding: 0.5rem;
        display: flex;
        // justify-content: space-around;
        align-items: center;
        
        // margin: auto;
        // margin-top: 20px;
        
        input{
            // display: block;
            // margin: auto;
            margin-right: 30px;
            // margin-bottom: 1rem;
            width: 300px;
        }

        .btnS{
            width: 50px;
            // display: block;
            // margin: auto;
        }

    }

    .purchase{
        width:50%;
        background-color: #666;
        display: flex;
        align-items: center;
        position: relative;

        .btnP{
        width: 100px;
        height: 30px;
        background-color: gray;
        // margin-top: 3rem;
        color: white;
        position: absolute;
        right: 20pt;

    }
    }
}
    // .header{
    //     width: 50%;
    //     background-color: #666;
    //     padding: 1rem;
    //     display: block;
    //     margin: auto;

    //     .search{
    //         width: 50%;
    //         display: flex;
    //         justify-content: center;
    //         align-items: center;
    //         padding-left: 50%;
            
    //         .btnS{
    //             width: 150px;
    //             height: 50px;
    //             margin: 1rem;
    //         }
            
            
            
    //     }


    // }

</style>