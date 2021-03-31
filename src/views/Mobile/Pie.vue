<template>
  <Card class="bar-wrapper">
    <Title>市级部门占比</Title>
    <div class="pie" ref="chartEle"></div>
  </Card>
</template>
<script lang="ts">
import * as echarts from "echarts";
import Title from './Title.vue';
import Card from './Card.vue';
import { mapGetters } from 'vuex';
import {zcfzb} from "@/api/home";

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
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        right: "0",
        top: 'center',
      },
      series: [
        {
          name: "市级部门占比",
          type: "pie",
          radius: ['35%', '65%'],
          center: ['26%', '50%'],
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
    }
    // 使用刚指定的配置项和数据显示图表。
    this.chart.setOption(option);
  },
  methods: {
    getData() {
      zcfzb().then(res => {
        this.initChart(res)
      })
    },
    initChart(data) {
      let seriesData = data.map(item => {
        return {
          name: item.releaseDept,
          value: item.policyNum
        }
      })
      this.chart.setOption({
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
};
</script>
<style lang="scss" scoped>
.pie {
  height: 280px;
}
</style>