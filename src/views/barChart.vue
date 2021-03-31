<template>
  <div class="bar-chart">
    <Title>区域政策发布总览（TOP7）</Title>
    <div class="bar" ref="barChart"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import Title from '../components/Title.vue';
import {zcfbl} from "@/api/home";
import { mapGetters } from 'vuex';
export default {
  name: 'barChart',
  components: {
    Title
  },
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
    this.chart = echarts.init(this.$refs.barChart);
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
          data: [],
          axisLabel: {
            
              fontSize: 16
            
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
          data: [],
          type: 'bar',
          color: '#00A3E5',
          barWidth: 30,
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
  }
}
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