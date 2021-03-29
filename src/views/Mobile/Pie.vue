<template>
  <Card class="bar-wrapper">
    <Title>市级部门占比</Title>
    <div class="pie" ref="chartEle"></div>
  </Card>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted } from "vue";
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import Title from './Title.vue';
import Card from './Card.vue';

echarts.use([
  PieChart,
  CanvasRenderer,
  LegendComponent,
  TooltipComponent,
  GridComponent,
]);

export default defineComponent({
  setup() {
    const { ctx } = getCurrentInstance() as any; // 目前我是这样解决,如果有其他方法也可以分享一下
    onMounted(() => {
      const ele = ctx.$refs.chartEle;
      const myChart = echarts.init(ele);
      myChart.setOption({
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          right: "40",
          top: 'center',
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ['40%', '70%'],
            center: ['30%', '50%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 4,
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
              { value: 1048, name: "搜索引擎" },
              { value: 735, name: "直接访问" },
              { value: 580, name: "邮件营销" },
              { value: 484, name: "联盟广告" },
              { value: 300, name: "视频广告" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
    });
    return {};
  },
  components: {
    Title,
    Card,
  },
});
</script>
<style lang="scss" scoped>
.pie {
  height: 200px;
}
</style>