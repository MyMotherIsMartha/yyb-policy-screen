<template>
  <div class="bar-chart">
    <div ref="barChart" :style="{ width: '100%', height: '380px' }"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { ref } from "vue";
import * as echarts from "echarts";
export default defineComponent({
  name: 'barChart',
  components: {},
  setup() {
    const state = reactive({ 
      barChart: ref<any>()
    })

    
    onMounted(() => {
      initCharts();
      console.log('barchart:', state.barChart)
    });

    const initCharts = () => {
      var myChart = echarts.init(state.barChart);
 
      // 指定图表的配置项和数据
      var option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    };

    return {
      // barChart,
      ...toRefs(state)
    };
  }
})
</script>