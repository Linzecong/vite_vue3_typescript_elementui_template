<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/views/components/HelloWorld.vue'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>
<style lang="less">
@import "ant-design-vue/dist/antd.less"; // 引入官方提供的 less 样式入口文件
@import "@/less/antdv.less"; // 覆盖主题，这个为全局覆盖！全局只需要这一份，其他的不要再引入了

</style>