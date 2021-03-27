import { createStore } from 'vuex'

export default createStore({
  state: {
    message: 'Hello!',
    count: 1
  },
  mutations: {
    addcount(state, param) {
      state.count += param
      console.log(typeof param)
      console.log('触发mutation里面的方法1' + param)
      console.log('触发mutation里面的方法2' + JSON.stringify(state.count))
    }
  },
  actions: {},
  modules: {}
})
