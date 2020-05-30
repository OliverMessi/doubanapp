<template>
  <tab-bar>
    <tab-bar-item path="/home" >
      <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/subject" >
      <img slot="item-icon" src="~assets/img/tabbar/subject.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/subject_active.png" alt="">
      <div slot="item-text">书影音</div>
    </tab-bar-item>
    <tab-bar-item path="/group" >
      <img slot="item-icon" src="~assets/img/tabbar/group.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/group_active.png" alt="">
      <div slot="item-text">小组</div>
    </tab-bar-item>
    <tab-bar-item path="/mall" >
      <img slot="item-icon" src="~assets/img/tabbar/mall.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/mall_active.png" alt="">
      <div slot="item-text">集市</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" >
      <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
