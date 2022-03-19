<!--
 * @Author: your name
 * @Date: 2022-03-19 17:46:46
 * @LastEditTime: 2022-03-19 19:12:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \tabbar\src\components\MyTabar.vue
-->
<template>
  <div class="my-tab-bar">
    <div
      class="tab-item"
      v-for="(item, index) in tabbarArr"
      :key="index"
      @click="btn(index, item)"
      :class="{ current: index === selIndex }"
    >
      <!-- 图标 -->
      <span class="iconfont" :class="item.iconText"></span>
      <!-- 文字 -->
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  // 定义props接收父组件传递的数据
  props: {
    tabbarArr: {
      type: Array,
      required: true,
      //自定义校验规则
      validator(value) {
        if (value.length >= 2 && value.length <= 5) {
          return true;
        } else {
          console.error("数据源必须在2-5项之间");
          return false;
        }
      },
    },
  },
  // 数据对象
  data() {
    return {
      selIndex: 0, //默认选中第一个
    };
  },
  //函数
  methods: {
    btn(index, item) {
      // 将点击项的索引值保存到选中的变量中
      this.selIndex = index;
      // 将自组将的组件切换的值传给父组件
      this.$emit("changeCom", item);
    },
  },
};
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.current {
  color: #1d7bff;
}
</style>

