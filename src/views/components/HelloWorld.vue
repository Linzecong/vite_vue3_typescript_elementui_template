<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
import { UserService } from '@/api/user'
import { useUser } from '@/composibles/userCom'
import { ref, reactive, defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {

    const { handleLogin, handleRegister } = useUser()

    const count = ref(0)
    return {
      count,
      handleLogin,
      handleRegister
    }
  }
})
</script>

<style lang="less" scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
