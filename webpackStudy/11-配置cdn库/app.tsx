<template>
  <div class="testClass">{{ message }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: 'hello vue',
    }
  },
}
</script>

<style lang="less">
// @import url('./pubilc/css/base.less');
.testClass {
    height: 100px;
    width: 100px;
    background: red;
}
</style>
