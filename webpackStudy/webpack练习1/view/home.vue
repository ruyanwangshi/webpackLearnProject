<template>
  <div class="title">{{ message }}</div>
</template>

<script>
export default {
    data() {
        return {
            message: 'hello vue'
        }
    }
}
</script>

<style lang="less">
.title{
    position: relative;
    z-index: 10;
    height: 100px;
    width: 200px;
    background: brown;
}
</style>