<template>
  <div class="test">
    <button @click="clickHandler($event)">点击</button>
    <input v-model="message">
    <input :value="message" @input="message=$event.target.value">
    <p>{{message}}</p>
  </div>
</template>

<script>
  export default {
    name: 'test',
    props: ['value'],
    data () {
      return {
        message: ''
      }
    },
    methods: {
      changeInput (e) {
        console.log(e)
        console.log(e.target)
        this.$emit('input', e.target.value)
      },
      clickHandler (e) {
        console.log('Button clicked!', e)
        this.$emit('select')
      }
    }
  }
</script>

<style>

</style>
