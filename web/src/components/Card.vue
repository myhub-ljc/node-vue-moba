<template>
  <div class="card bg-white p-3 mt-3">
      <div class="card-header d-flex ai-center pb-3">
        <i class="iconfont" :class="`icon-${icon}`"></i>
        <div class="fs-xl flex-1">{{title}}</div>
        <i class="iconfont">&#xe701;</i>
      </div>
      <div class="card-body pt-3">
        <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {type: String, required: true},
    icon: {type: String, required: true}
  }
}
</script>

<style lang="scss">
@import '../assets/scss/variables';
.card {
  .card-header {
    border-bottom: 1px solid #999;
  }
  border-bottom: 1px solid #999;
}
</style>