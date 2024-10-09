<template>
    <div class="footer-box">
        <div>
            <div class="logo">Axolotland-Logo</div>
            <div class="copyright">Axolotland | Copyright @ 2024</div>
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
    export default{
        name:"footer",
        components:{},
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
</style>