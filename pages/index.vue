<template>
  <section class="container"  >
    <div class="demo">nuxt模板</div>
    <button @click="changeTheme">切换主题色</button>
  </section>
</template>

<script>

export default {
  components: {
  },
  mounted() {
    console.log(this.$store.state)
    // maskCom({
    //   title: '提示'
    // })
  },
  methods: {
    changeTheme() {
      if (this.$store.state.init.nowThemeInfo == 'default-theme') {
        this.$store.commit('init/SET_THEMEINFO', 'red')
      } else {
        this.$store.commit('init/SET_THEMEINFO', 'default')
      }
    }
  }
}
</script>

<style lang="scss" >

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .demo{
    @include base-background();
    @include setColor()
  }
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
