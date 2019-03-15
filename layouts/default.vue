<template>
  <div :data-theme='$store.state.init.nowThemeInfo'>
    <nuxt />
  </div>
</template>

<style lang="scss" scoped>
.container{
  height:1200px;
  @include setBackground();
}
</style>




