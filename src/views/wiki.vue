<template> 
    <div class="wiki-box">
        <div class="wiki-menu">
            <div class="wiki-menu-inside">
                <div class="wiki-menu-item me-4" :class="item.path===path?'is-showing':''" v-for="item in wikiMenu.menuList" :key="item.path" @click="linkto(`/wiki/${item.path}`)">
                    {{ item.name }}
                </div>
            </div>
        </div>
        <div class="wiki-content">
            <div class="markdown-body" v-html="renderedMarkdown"></div>
        </div>
    </div>
</template>

<script>
    import { http, httpStatic } from '@/utils/http'
    import { wikiMenuStore } from '../stores/stores'
    import MarkdownIt from 'markdown-it'

    import '../assets/markdown.css'
    export default{
        // components:{Navbar},
        props: ['path'],
        data(){
            return{
                renderedMarkdown:'',
                wikiMenu:wikiMenuStore(),
            }
        },
        mounted(){
            // console.log(this.$route,this.path)
            this.getMdData(this.path)
        },
        methods:{
            getMdData(path){
                httpStatic.get(`/wiki/${path}.md`)
                .then(res=>{
                    const md = new MarkdownIt()
                    // console.log(res.data)
                    this.renderedMarkdown = md.render(res.data)
                })
            },
            linkto(page){
                this.$router.push(page)
            }
        },
        watch:{
            $route(to,from){
                this.getMdData(to.params.path)
            }
        }
    }
</script>

<style scoped>
.wiki-box{
    display: flex;
    padding: 20px;
    padding-top: 0;
    position: relative;
}
.wiki-menu{
    min-width: 260px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    padding: 2px;
    margin-top: 30px;
    color: var(--text-color);
    .wiki-menu-item{
        margin: 2px 5px;
        margin-left: 0;
        padding: 5px 20px;
        cursor: pointer;
        transition: 0.2s ease;
        border-radius: 8px;
        &:hover{
            color:var(--text-theme-color);
            background: var(--background-theme-color-hover);
        }
    }
}
.wiki-menu-inside{
    position: sticky;
    top: 106px;
}
.wiki-content{
    margin: 5px;
    flex-grow: 1;
    padding: 2px;
}
.is-showing{
    color:var(--text-theme-color);
    background: var(--background-theme-color-hover);
}
</style>