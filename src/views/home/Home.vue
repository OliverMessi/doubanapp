<template>
 <div id="home">
   <nav-bar class="home-nav"><div slot="center">豆瓣图书</div></nav-bar>
   <home-swiper :subjects="subjects"/>
 </div>
</template>

<script>

  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper"

  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper
    },
    data(){
      return{
        subjects:[],//存放热映的电影数组数据
      }
    },
    created(){
      //1.请求多个数据
      getHomeMultidata().then(res=>{
        console.log(res);
         this.subjects = res.subjects;
      })
    }
  }
</script>

<style scoped>
 .home-nav{
   background-color: var(--color-tint);
   color: white;
 }
</style>
