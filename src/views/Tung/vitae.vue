<script>
import mapN from '../components/mapN/mapN.vue'
import mapS from '../components/mapS/mapS.vue'
import mapW from '../components/mapW/mapW.vue'
import mapE from '../components/mapE/mapE.vue'

export default{
    components:{
        mapN,
        mapS,
        mapW,
        mapE
    }
}
</script>



<template>
    <div class="vitaeArea">
        <div class="vitaeRes">

        </div>
        <div class="vitaeMap">
            <div class="mapN"> <mapN /></div>
            <div class="mapS"> <mapS /></div>
            <div class="mapW"> <mapW /></div>
            <div class="mapE"> <mapE /></div>

        </div>
    </div>
</template>


<style lang="scss" scoped>
.vitaeArea{
    width: 50%;
    height: 30rem;
    background-color: #888;
    display: flex;

    .vitaeRes{
        width: 30%;
        height: 30rem;
        border:  1px solid black;
    }

    .vitaeMap{
        width: 70%;
        height: 30rem;
    }
}
</style>
