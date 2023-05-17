<script>


export default{
    components:{
        
    }
}
</script>


<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalN">
    North
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModalN" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
            <button type="button" class="btn btn-primary">新北</button>
            <button type="button" class="btn btn-primary">台北</button>
            <button type="button" class="btn btn-primary">桃園</button>
            <button type="button" class="btn btn-primary">新竹</button>
            <button type="button" class="btn btn-primary">宜蘭</button>
        </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
        </div>
        </div>
    </div>
    </div>


    

</template>

<style>

</style>