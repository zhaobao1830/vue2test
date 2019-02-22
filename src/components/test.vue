<template>
  <div class="test">
    <p>我是测试组件</p>
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
    },
    beforeRouteEnter (to, from, next) {
      console.log('这是test的beforeRouteEnter')
      next(vm => {
        console.log('这是test1的vm实例：' + vm)
      })
    },
    beforeRouteLeave (to, from, next) {
      console.log('这是test的beforeRouteLeave')
      next()
    }
  }
</script>

<style>

</style>
