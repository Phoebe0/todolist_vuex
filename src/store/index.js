import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 数据列表
        list: JSON.parse(localStorage.getItem('list')) || [],
         // 切换菜单
        menus: ['全部','未完成','已完成'],
        // 默认高亮菜单
        active: '全部'
    },
    mutations: {
        isChecked(state, { index, val }) {
           state.list[index].isDone = val
        },
        del(state, id){
            state.list = state.list.filter(item => item.id !== id)
        },
        add(state,newVal) {
            state.list.unshift(
                {
                    id: Date.now(),
                    name: newVal,
                    isDone: false
                }
            )
        },
        checkAllFn(state,value) {
        state.list.forEach((item) => (item.isDone = value))
        },
        clearAll(state) {
            state.list = state.list.filter(item => !item.isDone)
        },
        cutoverFn(state,item) {
            state.active = item
        }
        
    },
    getters:{
         // 切换菜单功能
    showList(state) {
        if (state.active === '未完成') {
        return state.list.filter((item) => item.isDone === false)
      } else if (state.active === '已完成') {
        return state.list.filter((item) => item.isDone === true)
      } else {
        // 所有的
        return state.list
      }
      }
    },
    strict: true
})