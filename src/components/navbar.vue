<template>  
    <div style="top:0;position: fixed;">
        <div class="nav-box">
            <div class="nav-box-left">
                <div>
                    <Logo color="var(--text-color)" w="40px" h="35px"></Logo>
                </div>
                <NavRouter/>
            </div>
            <div class="nav-box-right">
                <div>links</div>
                <div>lang</div>
                <Theme/>
                <div>about</div>
            </div>
        </div>
    </div>
</template>

<script>
    import Theme from './theme.vue'
    import NavRouter from './navRoute.vue'
    import Logo from './logo.vue'
    export default{
        name:"navbar",
        components:{Theme,NavRouter,Logo},
        data(){
            return{

            }
        },
        created() {
            this.checkSystemTheme()
        },
        mounted(){

        },
        methods:{
            checkSystemTheme() {
                if (!localStorage.getItem('theme')) {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
                    const theme = prefersDark ? 'dark' : 'light'
                    localStorage.setItem('theme', theme)
                    document.documentElement.setAttribute('data-theme', theme)
                }
            }
        }
    }
</script>

<style scoped>
.nav-box{
    transition: 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    box-shadow: var(--nav-shadow);
    /* height: 34px; */
    background: var(--background-color);
    color:var(--text-color);
}

.nav-box-right{
    display: flex;
    flex-direction: row;
    align-items: center;
    &>div{
        padding: 0px 10px;
    }
}

.nav-box-left{
    display: flex;
    flex-direction: row;
    align-items: center;
    &>div{
        padding: 0px 10px;
    }
}
</style>