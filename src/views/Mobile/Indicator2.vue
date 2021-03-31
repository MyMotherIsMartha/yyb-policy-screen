<template>
  <Card>
    <div class="indicator">
      <Title> <span class="title-dot"></span> 政策兑付总览</Title>
      <div class="list">
        <div class="item" v-for="item in list" :key="item.name">
          <span class="value">{{ item.value }}</span>
          <span class="name">{{ item.name }}</span>
          <span class="unit">{{ item.unit }}</span>
        </div>
      </div>
    </div>
  </Card>
</template>
<script>
import Title from './Title.vue';
import Card from './Card.vue';
import {zcdf,zcdfjm} from "@/api/home"
import {mapGetters} from 'vuex';
import { round } from 'lodash'
export default {
  data() {
    return {
      list: [
        { name: '兑付总额', unit: '(万元)', value: 0 },
        { name: '兑付总笔数', value: 0 },
        { name: '已兑付金额', unit: '(万元)', value: 0 },
        { name: '已兑付笔数', value: 0 },
      ]
    }
  },
  components: {
    Title,
    Card,
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
    async getData() {
      // zcdf().then(res => {
      //   this.list = [
      //     { name: '兑付总额', unit: '(万元)', value: round(res.totalAmount/ 10000, 3) },
      //     { name: '兑付总笔数', value: res.totalNum },
      //     { name: '已兑付金额', unit: '(万元)', value: round(res.totalAlreadyAmount/10000, 3) },
      //     { name: '已兑付笔数', value: res.totalAlreadyNum },
      //   ]
      // })
      let result = await zcdf()
      let result2 = await zcdfjm()
      this.list = [
        { name: '兑付总额', unit: '(万元)', value: round((result.totalAmount + result2.totalAmount) /10000, 3) },
        { name: '兑付总笔数', value: round(result.totalNum + result2.totalNum, 3) },
        { name: '已兑付金额', unit: '(万元)', value: round((result.totalAlreadyAmount + result2.totalAlreadyAmount) /10000, 3)},
        { name: '已兑付笔数', value: round(result.totalAlreadyNum + result2.totalAlreadyNum, 3) },
      ]
      this.$store.commit("SetLoading", false)
    }
  }
}
</script>
<style lang="scss" scoped>
.indicator {
  .title-dot{
    display: inline-block;
    width: 16px;
    height: 16px;
    background: #D8FFF0;
    margin: 0 3px;
    border-radius: 50%;
    transform: translateY(3px);
  }
  .list {
    display: flex;
    margin-left: -14px;
    padding: 10px 0;
    justify-content: space-between;
    // outline: 1px solid red;
    .item {
      display: flex;
      flex-direction: column;
      position: relative;
      padding-left: 14px;
      width: 25%;
      &:not(:last-child)::after {
        position: absolute;
        content: ' ';
        right: 0;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 1px;
        height: 20px;
        background: #eee;
      }
      .value {
        font-family: 微软雅黑;
        font-size: 12px;
        color: #333;
      }
      .name, .unit {
        font-family: 微软雅黑;
        font-size: 10px;
        color: #999;
        transform: scale(0.8);
        transform-origin: left center;
      }
    }
  }
}
</style>
