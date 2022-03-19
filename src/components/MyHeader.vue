<!--
 * @Author: your name
 * @Date: 2022-03-19 17:46:31
 * @LastEditTime: 2022-03-19 18:16:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \tabbar\src\components\MyHeader.vue
-->
<template>
  <div
    class="my-header"
    :style="{ backgroundColor: background, color: fontColor }"
  >
    {{ title }}
  </div>
</template>

<script>
export default {
  // 定义接收父组件传递的自定义标题数据对象、
  props: {
    title: {
      type: String,
      required: true,
    },
    background: String,

    fontColor: {
      type: String,
      default: "#fff",
    },
  },
};
</script>

<style lang="less" scoped>
.my-header {
  height: 45px;
  background-color: #1d7bff;
  line-height: 45px;
  color: #fff;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
}
</style>