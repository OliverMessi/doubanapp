<template>
  <swiper>
    <swiper-item v-for="item in subjects">
      <a :href="item.alt">
        <img :src="item.images.small" alt="未显示" height="200"/>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper';

  export default {
    name: "HomeSwiper",
    props:{
      subjects:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>
