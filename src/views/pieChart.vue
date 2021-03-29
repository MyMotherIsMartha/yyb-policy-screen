<template>
  <div class="bar-chart">
    <Title>市级部门占比</Title>
    <div class="pie" ref="pieChart"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { ref } from "vue";
import * as echarts from "echarts/core";
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import Title from '../components/Title.vue';

echarts.use([
  CanvasRenderer,
  LegendComponent,
  TooltipComponent,
  GridComponent,
]);

export default defineComponent({
  name: 'barChart',
  components: {
    Title
  },
  setup() {
    const state = reactive({ 
      pieChart: ref<any>()
    })

    
    onMounted(() => {
      initCharts();
      console.log('barchart:', state.pieChart)
    });

    const initCharts = () => {
      const myChart = echarts.init(state.pieChart);
 
      // 指定图表的配置项和数据
      const option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          right: "10",
          top: '10',
        },
        series: [
          {
              name: '访问来源',
              type: 'pie',
              radius: ['40%', '70%'],
              center: ['40%', '50%'],
              avoidLabelOverlap: false,
              itemStyle: {
                  borderRadius: 5,
                  borderColor: '#fff',
                  borderWidth: 2
              },
              label: {
                  show: false,
                  position: 'center'
              },
              labelLine: {
                  show: false
              },
              data: [
                  {value: 1048, name: '搜索引擎'},
                  {value: 735, name: '直接访问'},
                  {value: 580, name: '邮件营销'},
                  {value: 484, name: '联盟广告'},
                  {value: 300, name: '视频广告'}
              ]
          }
        ],
      }
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
<style lang="scss" scoped>
  .bar-chart{
    padding: 20px 30px;
    .pie{
      margin-top: 30px;
      height: 320px;
    }
  }
</style>