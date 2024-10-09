<template> 
    <div class="index">
        <el-carousel :interval="100000" :pause-on-hover="false" direction="vertical" arrow="never" style="height: calc(100vh - 72px);">
            <el-carousel-item v-for="item in carouselList" :key="item.url">
                <!-- <div :style="{'background-image':`url(${item.url})`}" style="background-position: center;background-repeat: no-repeat;background-size: cover;width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;">
                    <div style="width: 90%;height: 90%;display: flex;justify-content: center;align-items: center;background: #ffffff90;backdrop-filter: blur(10px);">{{ item.url }}</div>
                </div> -->
                <div style="background: #434343;background-position: center;background-repeat: no-repeat;background-size: cover;width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;">
                    <div style="width: 50%;height: 50%;display: flex;justify-content: center;align-items: center;background: #ffffff90;backdrop-filter: blur(10px);">{{ item.url }}</div>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    import { http, httpStatic } from '@/utils/http'
    export default{
        components:{},
        data(){
            return{
                carouselList:[]
            }
        },
        mounted(){
            this.getCarouselData()
        },
        methods:{
            getCarouselData(){
                httpStatic.get(`/carousel`)
                .then(res=>{
                    
                    this.carouselList=res.data.map((item)=>{
                        return ({
                            url:httpStatic.defaults.baseURL+'/carousel/'+item.name,
                            time:item.mtime
                        })
                    })
                    console.log(this.carouselList)
                })
            },
        }
    }
</script>

<style scoped>
.index{
    color:var(--text-color);
}
</style>