<template>
  <Card>
    <div class="indicator">
      <Title> <span class="title-dot"></span> 政策总览</Title>
      <div class="list">
        <div class="item" v-for="item in list" :key="item.name">
          <span class="value">{{ item.value }}</span>
          <span class="name">{{ item.name }}</span>
        </div>
      </div>
    </div>
  </Card>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import Title from './Title.vue';
import Card from './Card.vue';

export default defineComponent({
  setup() {
    const list = reactive([
      { name: '政策总发布量', value: 25345 },
      { name: '有效政策数', value: 25345 },
      { name: '到期政策数', value: 25345 },
      { name: '浏览量', value: 225345 },
    ]);
    return {
      list,
    };
  },
  components: {
    Title,
    Card,
  },
})
</script>
<style lang="scss" scoped>
.indicator {
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
      .name {
        font-family: 微软雅黑;
        font-size: 10px;
        color: #999;
        transform: scale(0.8);
        transform-origin: left center;
      }
    }
  }
  .title-dot{
    display: inline-block;
    width: 16px;
    height: 16px;
    background: #D8FFF0;
    margin: 0 3px;
    border-radius: 50%;
    transform: translateY(3px);
  }
}
</style>
