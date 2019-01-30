<template>
  <div class="test">
    <button @click="clickHandler($event)">点击</button>
  </div>
</template>

<script>
  export default {
    name: 'test',
    clickHandler (e) {
      console.log('Button clicked!', e)
      this.$emit('select')
    }
  }
</script>

<style>

</style>
