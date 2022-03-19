<!--
 * @Author: your name
 * @Date: 2022-03-19 17:47:04
 * @LastEditTime: 2022-03-19 19:38:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \tabbar\src\components\MyTable.vue
-->
<template>
  <table class="table table-bordered table-stripped">
    <!-- 表格标题区域 -->
    <thead>
      <tr>
        <!-- <th>序号</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th> -->
        <slot name="tableTitle"></slot>
      </tr>
    </thead>
    <!-- 表格主体区域 -->
    <tbody>
      <tr v-for="item in goodsArr" :key="item.id">
        <!-- <td>{{ item.id }}</td>
        <td>{{ item.goods_name }}</td>
        <td>{{ item.goods_price }}</td>
        <td>{{ item.tags }}</td>
        <td>
          <button>删除</button>
        </td> -->

        <slot name="tableContent" :row="item"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  // 定义props对象接收父组件传递的商品数据
  props: {
    goodsArr: {
      type: Array,
    },
  },
};
</script>


<style scoped lang="less">
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>
