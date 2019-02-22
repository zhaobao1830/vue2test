<template>
  <div>我是tes1组件</div>
</template>

<script>
  export default {
    name: 'test1',
    mounted () {
      console.log(this.$router.app)
      console.log(this.$router.mode)
      console.log(this.$router.currentRoute)
      console.log(this.$route.matched)
    },
    beforeRouteEnter (to, from, next) {
      console.log('这是test1的beforeRouteEnter')
      next(vm => {
        console.log('这是test1的vm实例：' + vm)
      })
    },
    beforeRouteLeave (to, from, next) {
      console.log('这是test1的beforeRouteLeave')
      next()
    }
  }
</script>

<style scoped>

</style>
