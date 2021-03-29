<template>
  <div class="policy-cash">
    <div class="left-block">
      <div class="indicator">
        <Title> <span class="title-dot"></span>  政策总览</Title>
        <div class="list">
          <div class="item" v-for="item in list" :key="item.name">
            <span class="value">{{ item.value }}</span>
            <span class="name">{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="right-block">
      <div class="indicator">
        <Title> <span class="title-dot"></span> 政策总览兑付</Title>
        <div class="list">
          <div class="item" v-for="item in list2" :key="item.name">
            <span class="value">{{ item.value }}</span>
            <span class="name">{{ item.name }}</span>
            <span class="unit">{{ item.unit }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import Title from '../components/Title.vue';
export default defineComponent({
  name: 'policyCash',
  components: {
    Title,
  },
  setup() {
    const state = reactive({ 
      list: [
        { name: '政策总发布量', value: 25345 },
        { name: '有效政策数', value: 25345 },
        { name: '到期政策数', value: 25345 },
        { name: '浏览量', value: 225345 },
      ],
      list2: [
        { name: '兑付总额', unit: '(万元)', value: 25345 },
        { name: '兑付总笔数', value: 25345 },
        { name: '已兑付金额', unit: '(万元)', value: 25345 },
        { name: '已兑付笔数', value: 225345 },
      ]
    })

    return {
      ...toRefs(state)
    }
  }
  
})
</script>
<style lang="scss" scoped>
.policy-cash{
  display: flex;
  justify-content: space-between;
  .left-block, .right-block{
    width: calc(50% - 10px);
    height: 218px;
    background: #fff;
    .title-dot{
      display: inline-block;
      width: 22px;
      height: 22px;
      background: #D8FFF0;
      margin: 0 3px;
      border-radius: 50%;
      transform: translateY(3px);
    }
  }
  .left-block, .right-block{
    padding: 20px 30px;
    .indicator {
      .list {
        display: flex;
        margin-left: -10px;
        margin-top: 40px;
        padding: 10px 0;
        justify-content: space-between;
        // outline: 1px solid red;
        .item {
          display: flex;
          flex-direction: column;
          position: relative;
          padding-left: 10px;
          text-align: left;
          &:not(:last-child)::after {
            position: absolute;
            content: ' ';
            right: 0;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 1px;
            height: 50px;
            background: #eee;
          }
          .value {
            font-family: 微软雅黑;
            font-size: 22px;
            color: #333;
          }
          .name, .unit {
            font-family: 微软雅黑;
            font-size: 18px;
            color: #999;
            margin-top: 10px;
            transform: scale(0.8);
            transform-origin: left center;
          }
          .unit{
            margin-top: -8px;
          }
        }
      }
    }
  }
}
</style>