<!--
 * @Author: your name
 * @Date: 2022-03-19 16:55:15
 * @LastEditTime: 2022-03-19 19:16:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \tabbar\src\App.vue
-->
<template>
  <div>
    <MyHeader
      title="TabBar案例"
      :background="'blue'"
      :fontColor="'white'"
    ></MyHeader>
    <div class="main">
      <keep-alive>
        <component :is="comName"></component>
      </keep-alive>
    </div>
    <MyTabar :tabbarArr="tabList" @changeCom="changeComFn"></MyTabar>
  </div>
</template>

<script>
// 导入组件
import MyHeader from "@/components/MyHeader";
import MyTabar from "@/components/MyTabar";
import MyGoodsList from "@/views/MyGoodsList";
import MyGoodsSearch from "@/views/MyGoodsSearch";
import MyUserInfo from "@/views/MyUserInfo";
export default {
  // 数据对象
  data() {
    return {
      comName: "MyGoodsList",
      // 底部导航的数据
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ],
    };
  },

  // 函数
  methods: {
    // 点击切换导航
    changeComFn(comName) {
      this.comName = comName.componentName;
    },
  },

  // creted生命周期函数
  // created: {},
  // 计算属性
  computed: {},

  // 侦听器
  watch: {},

  // 组件注册
  components: {
    MyHeader,
    MyTabar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
  },
};
</script>

<style lang="less" scoped>
.main {
  padding: 45px 0px 51px 0px;
}
</style>
