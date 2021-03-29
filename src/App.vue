<template>
  <router-view />
</template>

<script lang="ts">
import Index from './views/index.vue'

export default {
  name: 'App',
  components: {
    Index
  }
}
</script>
<style lang="scss">
@import "./assets/styles/base.scss";
</style>
