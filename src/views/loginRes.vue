<template> 
    <div class="logRes">
        <div>
            1
        </div>
        <div class="login-box">
            <div class="login-form">
                <h5>登录</h5>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        components:{},
        data(){
            return{

            }
        },
        mounted(){

        },
        methods:{

        }
    }
</script>

<style scoped>
.logRes{
    color:var(--text-color);
    height: calc(100vh + 28px);
    display: flex;
    justify-content: space-between;
    padding: 0 10%;
}
.login-box{
    height: 100%;
    display: flex;
    align-items: center;
}
.login-form{
    padding: 20px;
    border-radius: 8px;
    background: #f3c1ff;
    width: 300px;
    box-shadow: var(--box-shadow);
}
</style>