<template>
  <Card class="bar-wrapper">
    <Title>区域兑付总览</Title>
    <div class="legend">
      <div class="legend-side">
        兑付总额（万元）：<span class="rect total"></span><br/>
        已兑付金额（万元）：<span class="rect already"></span>
      </div>
    </div>
    <div class="bar" ref="chartEle"></div>
  </Card>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted } from 'vue'
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import Title from '../Title.vue';
import Card from '../Card.vue';

import getOptions from './options';

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
      myChart.setOption(getOptions([
        { name: '杭州市', value: 2432 },
        { name: '宁波市', value: 3223 },
        { name: '温州市', value: 1434 },
        { name: '嘉兴市', value: 1632 },
        { name: '湖州市', value: 892 },
        { name: '绍兴市', value: 1235 },
        { name: '金华市', value: 1763 },
        { name: '衢州市', value: 1464 },
        { name: '舟山市', value: 1856 },
        { name: '台州市', value: 1936 },
        { name: '丽水市', value: 1853 },
      ]));
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
  height: 500px;
}
.legend{
  height: 60px;
  padding: 15px 0;
  .legend-side{
    float: right;
    text-align: right;
    color: #939393;
    font-size: 16px;
    .rect{
      display: inline-block;
      height: 16px;
      width: 16px;
      transform: translateY(2px);
      &.total{
        background: #EAECEF;
      }
      &.already{
        background: #61D7B3;
      }
    }
  }
}
</style>