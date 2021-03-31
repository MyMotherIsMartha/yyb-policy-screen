<template>
  <div id="app">
    <div class="loading" v-if="isLoading">
      <img src="@/assets/img/loading.gif" />
    </div>
    <router-view/>
  </div>
</template>

<script >
import Index from './views/index.vue'
import { mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    Index
  },
  computed: {
    ...mapGetters(['isLoading'])
  },
  data() {
    return{
      // isLoading: true
    }
  }
}
</script>
<style lang="scss">
@import "./assets/styles/base.scss";
.loading{
  width: 100%;
  height: 100%;
  position: fixed;
  top:0;
  left:0;
  background: rgba(255,255,255, .3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  img{
    width: 100px;
  }
}
</style>

