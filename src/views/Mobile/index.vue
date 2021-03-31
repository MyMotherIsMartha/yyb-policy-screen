<template>
  <div class="mobile">
    <MobileHeader />

    <div class="content-wrap">
      <Indicator />
      <Indicator2 />
      <Bar />
      <Pie />
      <GradientBar />
    </div>
    
  </div>
</template>
<script>
import MobileHeader from '../../components/MobileHeader.vue'
import Indicator from './Indicator.vue';
import Indicator2 from './Indicator2.vue';
import Bar from './Bar.vue';
import Pie from './Pie.vue';
import GradientBar from './GradientBar2.vue';

export default {
  components: {
    MobileHeader,
    Indicator,
    Indicator2,
    Bar,
    Pie,
    GradientBar,
  },
  mounted() {
    this.login()
  },
  methods: {
    login(){   
      this.$store.dispatch("Login").then(()=>{
        console.log('logged')
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.content-wrap {
  background: #eee;
  padding: 0 15px ;
  margin-top: -56px;
}
</style>