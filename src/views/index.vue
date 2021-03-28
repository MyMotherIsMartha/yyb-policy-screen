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
    </div>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '../components/Header.vue'
import PolicyCash from './policyCash.vue'
import BarChart from './barChart.vue';
import PieChart from './pieChart.vue';
export default defineComponent({
  name: 'Index',
  components: {
    Header,
    PolicyCash,
    BarChart,
    PieChart
  },
})
</script>
<style lang="scss">
  .content-wrap{
    background: #EAECEF;
    padding: 20px 30px 100px;
    .chart-wrap{
      display: flex;
      justify-content: space-between;
      .left-chart{
        width: calc(60% - 10px);
      }
      .right-chart{
        width: calc(40% - 10px);
      }
      .left-chart, .right-chart{
        height: 423px;
        background: #fff;
      }
    }
  }
</style>
