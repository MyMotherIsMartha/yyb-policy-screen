<template>
  <div class="bar-chart">
    <Title>区域政策发布总览（TOP7）</Title>
    <div class="bar" ref="barChart"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { ref } from "vue";
import * as echarts from "echarts";
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import Title from '../components/Title.vue';
export default defineComponent({
  name: 'barChart',
  components: {
    Title
  },
  setup() {
    const state = reactive({ 
      barChart: ref<any>()
    })

    
    onMounted(() => {
      initCharts();
      console.log('barchart:', state.barChart)
    });

    const initCharts = () => {
      const myChart = echarts.init(state.barChart);
 
      // 指定图表的配置项和数据
      const option = {
        grid: {
          top: 15,
          bottom: 20,
          left: 0,
          right: 0,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['郢州', '江北', '海曙', '大榭', '东钱湖', '镇海', '北仑'],
          axisLabel: {
            textStyle: {
              fontSize: 20
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            textStyle: {
              fontSize: 20
            }
          }
        },
        tooltip: {
          trigger: "item",
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          color: '#00A3E5',
          barWidth: 30,
        }]
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
    .bar{
      margin-top: 30px;
      height: 320px;
    }
  }
</style>