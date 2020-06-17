import {debounce} from './utils';
import BackTop from 'components/content/backTop/BackTop';
export const itemListenerMixin = {
  data(){
    return{
      itemImgListener:null
    }
  },
  mounted(){
    //1.图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll.refresh,500)
    //监听item中图片加载完成
    this.itemImgListener = ()=>{
      refresh();
    }
    this.$bus.$on("itemImageLoad",this.itemImgListener)
  },
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      showBackTop: false
    }
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 1000)
    }
  }
}
