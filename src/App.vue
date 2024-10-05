<template>
    <Navbar style="width: 100%;z-index: 99;"/>
    <router-view style="margin-top: 56px;"></router-view>
    <!-- <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition> -->
</template>

<script>
  import Navbar from './components/navbar.vue'
  // import './assets/main.css'
  // import './assets/elementStyle.css'
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
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>