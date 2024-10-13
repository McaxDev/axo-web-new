<template>
    <div class="footer-box">
        <div>
            <div class="logo">
                <Logo color="var(--footer-text-color)" w="30px" h="25px"></Logo>
                <div style="font-weight: bold;margin-left: 2px;letter-spacing: 1px;">Axolotland</div>
            </div>
            <div class="copyright">Axolotland Gaming Club | Copyright @ 2024</div>
            <div class="beian">
                <a href="#" style="text-decoration: none;">{{ icp }}</a>
            </div>
        </div>
        <div>
            <RouterLink to="/edition">{{ app.version }}</RouterLink>
        </div>
    </div>
</template>

<script>
    import { appInfoStore } from '../stores/stores'
    import Logo from './logo.vue'
    export default{
        name:"footer",
        components:{Logo},
        data(){
            return{
                icp:'豫ICP备2023025148号',
                app:appInfoStore()
            }
        },
        mounted(){

        },
        methods:{

        }
    }
</script>

<style scoped>
.footer-box{
    color:var(--footer-text-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px;
    background: var(--footer-bg);
    font-size: 70%;
    a{
        text-decoration: none;
        color:var(--footer-text-color);
    }
}
.logo{
    display: flex;
    align-items: center;
}
</style>