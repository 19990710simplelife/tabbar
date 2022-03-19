<!--
 * @Author: your name
 * @Date: 2022-03-19 18:17:13
 * @LastEditTime: 2022-03-19 21:06:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \tabbar\src\views\MyGoodsList.vue
-->
<template>
  <div class="my-goods-list">
    <MyTable :goodsArr="list">
      <template #tableTitle>
        <th>序号</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>

      <template #tableContent="scoped">
        <td>{{ scoped.row.id }}</td>
        <td>{{ scoped.row.goods_name }}</td>
        <td>{{ scoped.row.goods_price }}</td>
        <td>
          <input
            type="text"
            class="tag-input form-control"
            style="width: 100px"
            v-if="scoped.row.inputVisible"
            v-focus
            @blur="scoped.row.inputVisible = false"
            @="scoped.row.inputVisible = false"
            @keyup.enter="addTag(scoped.row)"
            @keyup.esc="scoped.row.inputValue = ''"
            v-model="scoped.row.inputValue"
          />

          <button
            v-else
            style="display: block"
            class="btn btn-primary btn-sm add-tag"
            @click="scoped.row.inputVisible = true"
          >
            +Tag
          </button>
          <span
            v-for="(tagStr, index) in scoped.row.tags"
            :key="index"
            class="badge bg-warning text-dark"
          >
            {{ tagStr }}
          </span>
        </td>
        <td>
          <button
            class="btn btn-danger btn-sm"
            @click="delGoods(scoped.row.id)"
          >
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
// 导入组件
import MyTable from "@/components/MyTable";
export default {
  // 数据对象
  data() {
    return {
      list: [],
    };
  },

  methods: {
    // 实现点击删除数据
    delGoods(id) {
      // 查找id所对应的索引
      let index = this.list.findIndex((obj) => obj.id === id);
      // 删除数据
      this.list.splice(index, 1);
    },

    addTag(obj) {
      if (obj.inputValue.trim().length === 0) {
        alert("请输入数据");
      } else {
        obj.tags.push(obj.inputValue);
        obj.inputValue = "";
      }
    },
  },

  //创建的生命周期
  created() {
    this.$axios({
      url: "api/goods",
      method: "GET",
    })
      .then((result) => {
        this.list = result.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  components: {
    MyTable,
  },
};
</script>

<style lang="less" scoped>
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>