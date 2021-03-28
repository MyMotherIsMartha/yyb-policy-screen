<template>
  <div class="policy-cash">
    <div class="left-block"></div>

    <div class="right-block"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'policyCash',
}
</script>
<style lang="scss">
.policy-cash{
  display: flex;
  justify-content: space-between;
  .left-block, .right-block{
    width: calc(50% - 10px);
    height: 218px;
    background: #fff;
  }
}
</style>