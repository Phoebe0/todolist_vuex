<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" autofocus 
    @keyup.enter="add" />
  </header>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    add(e){
      console.log(e.target.value)
      this.$store.commit('add',e.target.value)
      e.target.value = ''
    }
  }
}
</script>

<style></style>
