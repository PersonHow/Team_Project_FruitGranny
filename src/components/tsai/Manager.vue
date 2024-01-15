<script>
export default {
    data() {
        return {
            members:[],
        }
    },
    methods: {
        getMembers(){
            let body={
                "permissions":localStorage.getItem("permissions"),
            }
            fetch("http://localhost:8080/show_all" ,{
                method: "POST",
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify(body)
            })
            .then(res => res.json())
            .then(data => {
                this.members = data;
                console.log(this.members);
                
            })
            .catch(error => console.log(error))
        }
    },
    mounted() {
        this.getMembers();
    },
}
</script>


<template>
    <div class="memberList">
        <div class="listTitle">
            <div class="account">
                <span>使用者</span>
            </div>
            <div class="email">
                <span>Email</span>
            </div>
            <div class="phone">
                <span>phone</span>
            </div>
            <div class="address">
                <span>地址</span>
            </div>
        </div>

        <div class="listContent" v-for="(item,index) in this.members">
            <div class="account">
                <span>{{ item.account }}</span>
            </div>
            <div class="email">
                <span>{{ item.email }}</span>
            </div>
            <div class="phone">
                <span>{{ item.phone }}</span>
            </div>
            <div class="address">
                <span>{{ item.address }}</span>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.memberList{
    width: 80%;
    height: 52vh;
    overflow: auto;
    // border: 1px solid black;

    .listTitle {
        width: 100%;
        height: 5vh;
        display: flex;
        border: 1px solid black;
        background-color: #fff;

        .account{
            width: 15%;
            height: 5vh;
            border-right: 1px solid black;
            padding:0.5%;
        }

        .email{
            width: 40%;
            height: 5vh;
            border-right: 1px solid black;
            padding:0.5%;
        }

        .phone{
            width: 15%;
            height: 5vh;
            border-right: 1px solid black;
            padding:0.5%;
        }

        .address{
            width: 30%;
            height: 5vh;
            padding:0.5%;
        }
    }

    .listContent{
        width: 100%;
        height: 7vh;
        display: flex;
        border: 1px solid black;
        background-color: #f4f0d9;

        .account{
            width: 15%;
            height:inherit;
            border-right: 1px solid black;
            padding:0.5%;
        }

        .email{
            width: 40%;
            height:inherit;
            border-right: 1px solid black;
            padding:0.5%;
        }

        .phone{
            width: 15%;
            height:inherit;
            border-right: 1px solid black;
            padding:0.5%;
        }

        .address{
            width: 30%;
            height:inherit;
            padding:0.5%;
        }
    }
    
}
</style>