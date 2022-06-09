<template>
  <section class="main">
    <!-- 全选框 -->
    <input id="toggle-all" class="toggle-all" type="checkbox" :checked="checkAll" @click="checkAllFn"/>
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li
        :class="{ completed: item.isDone }"
        v-for="(item,index) in showList"
        :key="item.id"
      >
        <div class="view">
          <input class="toggle" type="checkbox" @click="isChecked(index)" :id="index" :checked="item.isDone"/>
          <label>{{ item.name }}</label>
          <!-- 删除按钮 -->
          <button class="destroy" @click="del(item.id)"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  methods: {
    isChecked(index) {
     let val = document.getElementById(index).checked
     console.log(val)
     this.$store.commit("isChecked" , {index , val})
    },
    del(id){
      this.$store.commit("del" , id)
    },
    checkAllFn(e){
      console.log(e.target.checked)
      this.$store.commit("checkAllFn", e.target.checked)
    }
  },
  computed: {
    ...mapState(['list']),
    ...mapGetters(['showList']),
     checkAll: {
      get() {
        // 全选的逻辑，当所有的任务都完成，就应该选中
        return this.list.every((item) => item.isDone === true)
        }
     }
  },
  watch: {

  '$store.state.list'(value){
			//对数据执行操作
			localStorage.setItem('list', JSON.stringify(value))
		}
  }
}
</script>

<style></style>
