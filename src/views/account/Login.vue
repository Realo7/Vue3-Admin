<template>
  <div>{{ abc }}</div>
  <input type="text" v-model="par" />
  <button @click="setpar">233</button>
</template>
<script>
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  setup() {
    let p = new Promise((resolve, reject) => {
      resolve()
      reject()
    })
    const par = ref()
    const setpar = reactive(() => {
      new Promise((resolve, reject) => {
        if (par.value >= 0) {
          // 成功的回调
          resolve(clog)
        } else {
          // 失败的回调
          reject(cout)
        }
      })
    })
    const clog = reactive(() => {
      console.log('这是Clog方法')
    })
    const cout = reactive(() => {
      console.log('这是cout方法')
    })
    return {
      cout,
      clog,
      p,
      par,
      setpar
    }
  }
})
</script>
<style lang="scss">
@import './login.scss';
</style>
