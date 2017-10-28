<template>
  <div class="recommend">
    <scroll ref="scroll" class="recommend-content" :data="discList">
      <div>
        <div v-if="recommends.length" class="slider-wrapper">
          <slider>
            <div v-for="item in recommends">
              <a :href="item.jumpurl">
                <img @load="loadImage" :src="item.pic" alt="">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="item in discList">
              <a :href="item.dissid" class="item">
                <div class="icon">
                  <img height='60' weight='60' v-lazy="item.imgurl"/>
                </div>
                <div class="text">
                  <h2 class="name" v-html="item.author"></h2>
                  <p class="desc" v-html="item.dissname"></p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!discList.length">
        <loading></loading>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from '../../base/slider/slider.vue'
  import Loading from '../../base/loading/loading.vue'
  import {getRecommend} from '../../api/recommmend'
  import {ERR_OK} from '../../api/config'
  import Scroll from '../../base/scroll/scroll.vue'

  export default{
    data () {
      return {
        recommends: [],
        discList: []
      }
    },
    created () {
      this._getRecommend()
      setTimeout(() => {
        this._getDiscList()
      }, 1000)
    },
    methods: {
      _getRecommend () {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.focus
          }
        })
      },
      _getDiscList () {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.discList = res.data.hotdiss.list
            let map = this.discList
            for (let i = 0; i < map.length; i++) {
              let temp = 'https://y.qq.com/n/yqq/playlist/' + map[i].dissid + '.html#'
              map[i].dissid = temp
            }
            this.discList = map
            console.log(this.discList)
          }
        })
      },
      loadImage () {
        if (!this.checkloaded) {
          this.checkloaded = true
          this.$refs.scroll.refresh()
        }
      }
    },
    components: {
      Slider,
      Scroll,
      Loading
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable.styl"
  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)

</style>
