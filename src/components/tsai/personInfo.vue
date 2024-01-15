<script>
import original from '../tsai/OriginalInfo.vue'
import sets from '../tsai/SetInfo.vue';
export default{
    components:{
        original,
        sets,
    },
    data(){
        return{
            showSet:false,
            email: localStorage.getItem("email"),
            pwd: localStorage.getItem("password"),

            Name: "",
            Phone: "",
            Address: "",
            
        }
    },
    methods:{
        fetchData() {
            let body = {
                "email": this.email,
                "password": this.pwd,
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
                    this.Name = data.member.account;
                    this.Phone = data.member.phone;
                    this.Address = data.member.address;

                })
                .catch(err => {

                })
        },
        backOri(){
            this.showSet = !this.showSet;
        }
    },
    created(){
        this.fetchData();
    },
}
</script>

<template>
<div class="Info">
    <original  v-if="this.showSet == false" v-model:Name="Name" v-model:Phone="Phone" v-model:Address="Address" v-model:email="email"  @goSet="backOri"/>


    <sets v-if="this.showSet == true" v-model:Name="Name" v-model:Phone="Phone" v-model:Address="Address" v-model:email="email" v-model:pwd="pwd" @goBack="backOri"/>

</div>

</template>


<style lang="scss" scoped>
.Info{
    width: 700px;
}
</style>