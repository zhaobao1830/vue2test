<template>
  <div>
    <router-link to="test">跳转到test组件</router-link>
    <router-link to="test1">跳转到test1组件</router-link>
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
  .router-link-active{
    color: deeppink;
  }
</style>
