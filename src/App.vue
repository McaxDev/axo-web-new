<template>
    <Navbar style="width: 100%;z-index: 99;"/>
    <router-view style="margin-top: 72px;"></router-view>
    <!-- <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition> -->
</template>

<script>
  import Navbar from './components/navbar.vue'
  export default{
    components:{Navbar},
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
</style>