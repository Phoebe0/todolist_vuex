<template>
  <div id="app">
    <section class="todoapp">
      <ToDoHeader></ToDoHeader>
      <ToDoMain></ToDoMain>
      <ToDoFooter></ToDoFooter>
    </section>
  </div>
</template>

<script>
import ToDoHeader from './components/ToDoHeader.vue'
import ToDoFooter from './components/ToDoFooter.vue'
import ToDoMain from './components/ToDoMain.vue'
export default {
  components: {
    ToDoHeader,
    ToDoFooter,
    ToDoMain
  }
}
</script>

<style></style>
