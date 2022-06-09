<template>
  <footer class="footer" v-if="list.length > 0">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"><strong>{{leftCount}}</strong> item left</span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li v-for="item in menus" :key="item">
        <a :class="{selected: item === active}" href="#/" @click.prevent="cutoverFn(item)">{{item}}</a>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button class="clear-completed" @click="clearAll">Clear completed</button>
  </footer>
</template>

<script>
import {mapState} from 'vuex'
export default {
  methods:{
    // 清空未完成的任务
    clearAll(){
      this.$store.commit('clearAll')
    },
    // 切换菜单功能
    cutoverFn(item) {
      // 控制高亮
      this.$store.commit('cutoverFn',item)
    }
  },
  computed:{
    ...mapState(['list','menus','active']),
    // 剩余的任务数量
    leftCount() {
      // 过滤出isDone为false的任务并且得到他的长度
      return this.list.filter((item) => !item.isDone).length
    },
    
  }
}
</script>

<style></style>
