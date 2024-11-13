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
                <div>{{ $t('components.navbar.links') }}</div>
                <div>{{ $t('components.navbar.lang') }}</div>
                <Theme/>
                <div>{{ $t('components.navbar.about') }}</div>
                <div style="display: flex;align-items: center;">
                    <el-dropdown placement="bottom">
                        <el-avatar :icon="UserFilled" />
                        <template #dropdown>
                            
                            <el-dropdown-menu v-if="userInfo.isLogin">
                                <li class="username_el-dropdown-menu__item">username</li>
                                <hr class="m-0 mb-1" style="border-top: 1px var(--footer-text-color) solid;">
                                <el-dropdown-item>The Action 1st</el-dropdown-item>
                                <el-dropdown-item>The Action 2st</el-dropdown-item>
                                <el-dropdown-item>The Action 3st</el-dropdown-item>
                            </el-dropdown-menu>

                            <el-dropdown-menu v-else>
                                <el-dropdown-item @click="linkto(`/login`)">{{ $t('components.navbar.login') }}</el-dropdown-item>
                            </el-dropdown-menu>

                        </template>
                    </el-dropdown>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Theme from './theme.vue'
    import NavRouter from './navRoute.vue'
    import Logo from './logo.vue'
    import { userStore } from '@/stores/stores'
    export default{
        name:"navbar",
        components:{Theme,NavRouter,Logo},
        data(){
            return{
                userInfo:userStore(),
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
            },
            linkto(page){
                this.$router.push(page)
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

.username_el-dropdown-menu__item{
    display: flex;
    padding: 5px 16px;
    line-height: 22px;
}
</style>