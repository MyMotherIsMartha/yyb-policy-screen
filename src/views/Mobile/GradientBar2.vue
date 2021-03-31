<template>
  <Card class="bar-wrapper">
    <Title>区域兑付总览</Title>
    <div class="legend">
      <div class="legend-side">
        兑付总额：<span class="rect total"></span><br/>
        已兑付金额：<span class="rect already"></span>
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
            <div class="progress-value">{{item.percent}} %</div>
          </div>
        </li>
      </ul>
    </div>
  </Card>
</template>
<script lang="ts">
import Title from './Title.vue';
import Card from './Card.vue';
import { mapGetters } from 'vuex'
import {getAllAreaCash} from "@/api/home"
import { round } from 'lodash'
export default {
  name: 'areaCash',
  components: {
    Title,
    Card
  },
  data() {
    return {
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
  methods: {
    getData() {
      getAllAreaCash().then(res => {
        this.areaData= res.map(item => {
          return {
            title: item.jycs,
            percent: round(100 * item.totalAlreadyAmount / item.totalAmount, 2),
            value: round(item.totalAlreadyAmount / 10000, 3)
          }
        }).sort((a, b) => {
          return b.percent - a.percent
        })
      })
      
    }
  }
}
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
.area-cash-wrap{
    .area-ul{
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      .area-item{
        flex: none;
        width: 100%;
        padding: 5px 0;
        height: 40px;
        .item-title{
          font-size: 14px;
          color: #939393;
          margin-bottom: 5px;
        }
        .progress-wrap{
          display: flex;
          justify-content: space-between;
          align-items: center;
          .progress-bg{
            width: calc(100% - 60px);
            background: #EAECEF;
            height:6px;
            border-radius: 3px;
            .progress-bar{
              height: 6px;
              border-radius: 3px;
              background: #61D7B3;
              width: 50%;
            }
          }
          .progress-value{
            font-size:14px;
            width: 60px;
            color: #333333;
            text-align: center;
          }
        }
      }
    }
  }
</style>