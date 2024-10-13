<template> 
    <div class="index">
        <el-carousel :interval="100000" :pause-on-hover="false" direction="vertical" arrow="never" style="height: calc(100vh - 72px);">
            <el-carousel-item v-for="item in carouselList" :key="item.url">
                <div :style="{'background-image':`url(${item.url})`}" style="background-position: center;background-repeat: no-repeat;background-size: cover;width: 100%;height: 100%;">
                    <div style="height: 100%;width: 100%;flex-direction: column;display: flex;justify-content: end;align-items: start;padding: 20px;background: #00000050;">
                        <div style="color: #fff;margin-left: 20%;font-size: 52px;font-weight: 800;letter-spacing: 6px;">Axolotland</div>
                        <div style="color: #fff;margin-left: 20%;margin-bottom: 20%;font-size: 32px;font-weight: 800;letter-spacing: 4px;">Gaming Club</div>
                    </div>
                </div>
                <!-- <div style="background: #434343;background-position: center;background-repeat: no-repeat;background-size: cover;width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;">
                    <div style="width: 50%;height: 50%;display: flex;justify-content: center;align-items: center;background: #ffffff90;backdrop-filter: blur(10px);">{{ item.url }}</div>
                </div> -->
            </el-carousel-item>
        </el-carousel>
        <InedxIntroduction></InedxIntroduction>
    </div>
</template>

<script>
    import { http, httpStatic } from '@/utils/http'
    import InedxIntroduction from '@/components/inedxIntroduction.vue'
    export default{
        components:{InedxIntroduction},
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