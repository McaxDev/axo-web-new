<template>
    <Waterfall class="gallery" :list="directory" backgroundColor="#ffffff00">
        <!-- v2.6.0之前版本插槽数据获取 -->
        <!-- <template #item="{ item, url, index }"> -->
        <!-- 新版插槽数据获取 -->
        <template #default="{ item }">
            <div>
                <LazyImg :url="item.url" />
                <p class="text">{{ item.description }}</p>
            </div>
        </template>
    </Waterfall>
</template>

<script>
    import { http, httpStatic } from '@/utils/http'
    import { LazyImg, Waterfall } from 'vue-waterfall-plugin-next'
    import 'vue-waterfall-plugin-next/dist/style.css'
    export default{
        name:"",
        components: {
            LazyImg,
            Waterfall
        },
        data(){
            return{
                directory:[]
            }
        },
        mounted(){
            httpStatic.get('/gallery/metadata.json')
                .then(res=>{
                    console.log(res)
                    
                    this.directory=res.data.map((item,index)=>({
                        id:index+1,
                        description:item.description,
                        title:item.title,
                        url:httpStatic.defaults.baseURL + '/gallery/cover/' + item.cover,
                    }))
                    console.log(this.directory)
                })
                console.log(httpStatic.defaults.baseURL,this.directory)
        },
        methods:{

        }
    }
</script>

<style>
.waterfall-list , .gallery{
    .waterfall-item{
        img{
            border-radius: 8px;
        }
        padding: 5px;
        border-radius: 8px;
        box-shadow: none;
        &:hover{
            cursor: pointer;
            transition: 0.2s ease;
            box-shadow: var(--box-shadow);
        }
    }
}
</style>