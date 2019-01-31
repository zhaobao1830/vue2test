<template>
  <div>
    <test v-model="searchText"></test>
  </div>
</template>

<script>
  import test from 'components/test'

  export default {
    name: 'HelloWorld',
    data () {
      return {
        searchText: ''
      }
    },
    methods: {
      clickHandler () {
        console.log('Child clicked!')
      },
      selectHandler () {
        console.log('Child select!')
      }
    },
    components: {
      test
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
