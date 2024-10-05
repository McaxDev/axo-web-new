<template>
    <button class="theme-change" @click="toggleTheme">
        <ios-sunny-icon v-if="currentTheme==='light'" w="30" h="30"/>
        <ios-moon-icon v-else w="30" h="30"/>
    </button>
</template>
  
<script>
    export default {
        data() {
            return {
                currentTheme: localStorage.getItem('theme') || 'light'
            }
        },
        methods: {
            toggleTheme() {
                this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark'
                localStorage.setItem('theme', this.currentTheme)
                document.documentElement.setAttribute('data-theme', this.currentTheme)
            }
        },
        mounted() {
            document.documentElement.setAttribute('data-theme', this.currentTheme)
        }
    }
</script>

<style>
.theme-change{
    border: none;
    outline: none;
    background: none;
    svg{
        margin: 10px;
        cursor: pointer;
        path {
            transition: fill 0.2s ease;
            fill: var(--text-color);
            backdrop-filter: blur(10px);
        }
    }
}
</style>