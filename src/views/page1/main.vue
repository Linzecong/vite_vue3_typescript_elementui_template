<template>
    <h1>这是首页1</h1>
    <HelloWorld msg="传值"></HelloWorld>
    <router-link to="/page2">去2</router-link>
</template>

<script lang="ts">
import { UserService } from '@/api/user'
import { ref, reactive, defineComponent } from 'vue'
import HelloWorld from '@/views/components/HelloWorld.vue'
import { useStore } from '@/store'
import { GROUP } from '@/store/types'
export default defineComponent({
    name: 'page1main',
    components: {
        HelloWorld
    },
    setup: () => {

        const store = useStore()
        var user: IUser = {
            id: 1,
            username: "",
            password: "",
            email: "",
            phone: "",
            role: "",
        }

        const setTest = () => {
            store.commit(GROUP.SETTEST)
        }

        return {
            user,
            setTest
        }
    }
})
</script>

<style lang="less" scoped>
</style>
