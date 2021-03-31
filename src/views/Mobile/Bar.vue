<template>
  <Card class="bar-wrapper">
    <Title>区域政策发布总览</Title>
    <div class="bar" ref="chartEle"></div>
  </Card>
</template>
<script lang="ts">
import * as echarts from 'echarts/core';
import Title from './Title.vue';
import Card from './Card.vue';
import {zcfbl} from "@/api/home";
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      chart: null
    }
  },
  computed: {
    ...mapGetters(['token']),
  },
  watch: {
    'token': function (val, oldVal) {
      if (val) {
        this.getData()
      }
    }
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chartEle);
    // 指定图表的配置项和数据
    const option = {
      grid: {
        top: 15,
        bottom: 20,
        left: 30,
        right: 10,
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          fontSize: 8
        },
        data: []
      },
      yAxis: {
        type: 'value'
      },
      tooltip: {
        trigger: "item",
      },
      series: [{
        data: [],
        type: 'bar',
        color: '#00A3E5',
        barWidth: 14,
      }]
    }
    // 使用刚指定的配置项和数据显示图表。
    this.chart.setOption(option);
  },
  methods: {
    getData() {
      zcfbl().then(res => {
        this.initChart(res.splice(0, 7))
      })
    },
    initChart(data) {
      let xAxisData = data.map(item => item.areaName)
      let seriesData = data.map(item => item.count)
      this.chart.setOption({
        xAxis: {
          data: xAxisData
        },
        series: [{
          data: seriesData
        }]
      })
    }
  },
  components: {
    Title,
    Card,
  },
}
</script>
<style lang="scss" scoped>
.bar {
  height: 160px;
  // outline: 1px solid red;
  // margin: -10px;
}
</style>