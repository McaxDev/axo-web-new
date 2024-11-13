<template>
    <Navbar style="width: 100%;z-index: 99;"/>
    <router-view style="margin-top: 72px;padding-bottom: 100px;"></router-view>
    <!-- <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition> -->
    <Footerx style="bottom: 0;position: absolute;"></Footerx>
</template>

<script>
  import Navbar from './components/navbar.vue'
  import Footerx from './components/footerx.vue';
  export default{
    components:{Navbar,Footerx},
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

<style>
@font-face {
  font-family: 'pingfang';
  src: url('./assets/pingfang.ttf') format('woff');
  font-weight: normal;
  font-style: normal;
}
#app{
  font-family: 'pingfang';
  background-color: var(--background-color);
  min-height: calc(100vh - 72px);
  position: relative;
}
body{
  background-color: var(--background-color);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* 滚动条的宽度和轨道样式 */
body::-webkit-scrollbar {
  width:4px;
}
/* 滚动条轨道 */
body::-webkit-scrollbar-track {
  background: var(--background-color);
}

/* 滚动条手柄 */
body::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb); 
  border-radius: 4px;
}

/* 滚动条手柄悬停效果 */
body::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-thumb);
}
html{
  scroll-behavior: smooth;
}
</style>