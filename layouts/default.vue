<template>
  <div :data-theme='$store.state.init.nowThemeInfo'>
    <nuxt />
  </div>
</template>

<style lang="scss" scoped>
.container{
  @include setBackground();
}
</style>




