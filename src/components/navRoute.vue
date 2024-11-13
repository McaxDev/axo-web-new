<template>  
    <div>
        <div class="navroute-box">
            <div class="navroute-item" @click="linkto('/')">
                {{ $t('components.navRoute.index') }}
            </div>
            <div class="navroute-box ms-3">
                <el-dropdown>
                    <div class="navroute-box" @click="linkto(`/wiki/${wikiMenu.menuList[0].path}`)">
                        <div>
                            {{ $t('components.navRoute.wiki') }}
                        </div>
                        <el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </div>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item v-for="(item,index) in wikiMenu.menuList" :key="index" @click="linkto(`/wiki/${item.path}`)">
                                {{item.name}}
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
            <div class="navroute-item ms-3" @click="linkto('/gallery/index')">
                {{ $t('components.navRoute.gallery') }}
            </div>
            <div class="navroute-box ms-3">
                <el-dropdown>
                    <div class="navroute-box">
                        <div>
                            {{ $t('components.navRoute.more') }}
                        </div>
                        <el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </div>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item v-for="(item,index) in otherRoute" :key="index">
                                {{item.name}}
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
    // import '../assets/elementStyle.css'
    import { http, httpStatic } from '@/utils/http'
    import { wikiMenuStore } from '../stores/stores'
    export default{
        name:"",
        components:{},
        data(){
            return{
                wikiMenu:wikiMenuStore(),
                otherRoute:[
                    {
                        path:'/panel',
                        name:'控制台'
                    }
                ]
            }
        },
        mounted(){
            httpStatic.get('/wiki/metadata.json')
                .then(res=>{
                    this.wikiMenu.menuList=res.data
                    console.log(this.wikiMenu.menuList)
                })
        },
        methods:{
            linkto(page){
                this.$router.push(page)
            }
        }
    }
</script>

<style scoped>
.navroute-box{
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: 0.2s ease;
    outline: none;
}

.navroute-item{
    &:hover{
        cursor: pointer;
        transition: 0.2s ease;
        color:var(--text-theme-color);
    }
}
</style>