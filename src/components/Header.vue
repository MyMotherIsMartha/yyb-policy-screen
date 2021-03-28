<template>
  <div class="header-wrap">
    <h3 class="title">甬易办</h3>
    <p class="sub-title">宁波市惠企惠民政务服务平台（企业码）</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Header',
}
</script>
<style lang="scss">
  .header-wrap{
    height: 137.3928px;
    width: 100%;
    text-align: center;
    background: url('../assets/img/header-bg.png') no-repeat 0 0;
    background-size: 100% 100%;
    overflow: hidden;
    .title{
      margin-top: 20px;
      font-size: 44px;
      color: #fff;
    }
    .sub-title{
      font-size: 20px;
      color: #fff;
    }
  }
</style>