<template>
    <h1>这是首页2</h1>
    <About></About>
    <router-link to="/page1">去1</router-link>
</template>

<script lang="ts">
import { UserService } from '@/api/user'
import { ref, reactive, defineComponent } from 'vue'
import About from '@/views/components/About.vue'
export default defineComponent({
    name: 'page1main',
    components: {
        About
    },
    setup: () => {

        return {

        }
    }
})
</script>

<style lang="less" scoped>

</style>
