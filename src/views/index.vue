<template>
  <div class="container-index">
    <Header />

    <div class="content-wrap">
      <PolicyCash />
    </div>
  </div>
  
</template>

<script lang="ts">
import Header from '../components/Header.vue'
import PolicyCash from './policyCash.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Header,
    PolicyCash
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
<style lang="scss">
  .content-wrap{
    background: #EAECEF;
    padding: 20px 30px 100px;
  }
</style>
