<template>
  <div class="area-cash">
    <div class="title-row">
      <div class="title-side">区域兑付总览</div>

      <div class="legend-side">
        兑付总额（万元）：<span class="rect total"></span>
        已兑付金额（万元）：<span class="rect already"></span>
      </div>
    </div>

    <div class="area-cash-wrap">
      <ul class="area-ul">
        <li class="area-item" v-for="(item, index) in areaData" :key="index">
          <p class="item-title">{{item.title}}</p>
          <div class="progress-wrap">
            <div class="progress-bg">
              <div class="progress-bar" :style="{'width': item.percent + '%'}"></div>
            </div>
            <div class="progress-value">{{item.value}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { ref } from "vue";
import * as echarts from "echarts";
export default defineComponent({
  name: 'areaCash',
  components: {},
  setup() {
    const state = reactive({ 
      areaData: [{
        title: '市本级',
        percent: 90,
        value: 46758
      }, {
        title: '宁海县',
        percent: 80,
        value: 46758
      }, {
        title: '海曙区',
        percent: 90,
        value: 46758
      }, {
        title: '象山县',
        percent: 92,
        value: 46758
      }, {
        title: '江北区',
        percent: 60,
        value: 46758
      }, {
        title: '宁波杭州湾新区',
        percent: 70,
        value: 46758
      }, {
        title: '镇海区',
        percent: 70,
        value: 46758
      }, {
        title: '梅山物流产业集聚区',
        percent: 70,
        value: 46758
      }, {
        title: '北仑区',
        percent: 70,
        value: 46758
      }, {
        title: '宁波保税区',
        percent: 70,
        value: 46758
      }]
    })

    
    onMounted(() => {
    });

    return {
      // barChart,
      ...toRefs(state)
    };
  }
})
</script>
<style lang="scss" scoped>
.area-cash{
  padding: 10px 25px 40px;
  background: #fff;
  .title-row{
    display: flex;
    font-size: 24px;
    justify-content: space-between;
    padding-bottom: 20px;
    margin-bottom: 30px;
    border-bottom: 1px solid #EAECEF;
    .legend-side{
      color: #939393;
      .rect{
        display: inline-block;
        height: 26px;
        width: 26px;
        transform: translateY(4px);
        &.total{
          background: #EAECEF;
          margin-right: 10px;
        }
        &.already{
          background: #61D7B3;
        }
      }
    }
  }
  .area-cash-wrap{
    .area-ul{
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      .area-item{
        flex: none;
        width: 50%;
        padding: 5px 8px;
        height: 82px;
        .item-title{
          font-size: 20px;
          color: #939393;
          margin-bottom: 5px;
        }
        .progress-wrap{
          display: flex;
          justify-content: space-between;
          align-items: center;
          .progress-bg{
            width: calc(100% - 100px);
            background: #EAECEF;
            height: 12px;
            border-radius: 6px;
            .progress-bar{
              height: 12px;
              border-radius: 6px;
              background: #61D7B3;
              width: 50%;
            }
          }
          .progress-value{
            font-size: 20px;
            width: 100px;
            color: #333333;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>