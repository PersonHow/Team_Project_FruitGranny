<script>
import Login from "./LogIn.vue";
export default {
    components: {
        Login
    },
    data() {
        return {
            user_account: ""
        }
    },
    methods: {
        getAccount(user){
            this.user_account = user;
            console.log(this.user_account);
            // location.reload();
        }
    },
    mounted(){

    }
}
</script>

<template>
    <div>
        <p :user_account="user_account" @success="getAccount">Hello, {{ user_account }}</p>
    </div>
</template>

<style>
</style>