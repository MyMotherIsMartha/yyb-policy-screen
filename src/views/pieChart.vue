<template>
  <div class="bar-chart">
    <Title>市级部门占比</Title>
    <div class="pie" ref="pieChart"></div>
  </div>
</template>
<script >
import * as echarts from "echarts";
import Title from '../components/Title.vue';
import { mapGetters } from 'vuex';
import {zcfzb} from "@/api/home";
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
    this.chart = echarts.init(this.$refs.pieChart);
    // 指定图表的配置项和数据
    const option = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        right: "0",
        top: '0',
      },
      series: [
        {
            name: '市级部门占比 ',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['30%', '55%'],
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
    this.chart.setOption(option);
  },
  methods: {
    getData() {
      zcfzb().then(res => {
        this.initChart(res)
        console.log(res)
        
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
  }
}
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