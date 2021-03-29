<template>
  <Card class="bar-wrapper">
    <Title>区域政策发布总览</Title>
    <div class="bar" ref="chartEle"></div>
  </Card>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted } from 'vue'
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import Title from './Title.vue';
import Card from './Card.vue';

echarts.use([
  BarChart,
  CanvasRenderer,
  LegendComponent,
  TooltipComponent,
  GridComponent,
]);

export default defineComponent({
  setup() {
    const { ctx } = (getCurrentInstance() as any);// 目前我是这样解决,如果有其他方法也可以分享一下
    onMounted(()=>{
      const ele = ctx.$refs.chartEle;
      const myChart = echarts.init(ele);
      myChart.setOption({
        grid: {
          top: 15,
          bottom: 20,
          left: 30,
          right: 10,
        },
        xAxis: {
          type: 'category',
          data: ['郢州', '江北', '海曙', '大榭', '东钱湖', '镇海', '北仑']
        },
        yAxis: {
          type: 'value'
        },
        tooltip: {
          trigger: "item",
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          color: '#00A3E5',
          barWidth: 14,
        }]
      });
    })
    return {};
  },
  components: {
    Title,
    Card,
  },
})
</script>
<style lang="scss" scoped>
.bar {
  height: 160px;
  // outline: 1px solid red;
  // margin: -10px;
}
</style>