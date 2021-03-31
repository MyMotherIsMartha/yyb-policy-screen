<template>
  <div class="container-index">
    <Header />

    <div class="content-wrap">
      <PolicyCash />
      
      <div class="height-20"></div>

      <div class="chart-wrap">
        <BarChart class="left-chart"/>
        <PieChart class="right-chart" />
      </div>

      <div class="height-20"></div>

      <AreaCash />
    </div>
  </div>
  
</template>

<script>
import Header from '../components/Header.vue'
import PolicyCash from './policyCash.vue'
import BarChart from './barChart.vue';
import PieChart from './pieChart.vue';
import AreaCash from './areaCash.vue';
export default {
  name: 'Index',
  components: {
    Header,
    PolicyCash,
    BarChart,
    PieChart,
    AreaCash
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
  .content-wrap{
    background: #EAECEF;
    padding: 20px 30px 100px;
    .chart-wrap{
      display: flex;
      justify-content: space-between;
      .left-chart{
        width: calc(50% - 10px);
      }
      .right-chart{
        width: calc(50% - 10px);
      }
      .left-chart, .right-chart{
        height: 423px;
        background: #fff;
      }
    }
  }
</style>
