<template>
  <div>
    <swiper :options="swiperOptions">
      <swiper-slide>
        <img class="w-100" src="http://r.photo.store.qq.com/psc?/V10dFOfT42PhLi/OErzpq5D9LJxW5knQIpOPkWM1XAFwrjt5IetV2oNYFdpQg91RvLb2Zy5kBIHZeOY2pYOWAtX9MK8Dwoi19toogo.iUE0Swn1C4i**lagyZs!/r" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="http://r.photo.store.qq.com/psc?/V10dFOfT42PhLi/OErzpq5D9LJxW5knQIpOPuq3U7ptit7179180BQ97Y3FTDVQvMvTiAZDduN83.1zI3kYzDAVz5Ez583kPgsJ0TxWmoSiXSf7hvahnoRok7Y!/r" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="http://r.photo.store.qq.com/psc?/V10dFOfT42PhLi/OErzpq5D9LJxW5knQIpOPnopP4mb.pH0o6HkrTL7nmHBjg7DSHS9cWrRykmi.WshFs672rtX8rA7avi8HYkGvrEWL3*up35cRxVcEpel*ds!/r" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="http://r.photo.store.qq.com/psc?/V10dFOfT42PhLi/OErzpq5D9LJxW5knQIpOPiZuFOwCkprLrJa3daAXPVoFerGLlmsIso4r.qXjMWzP*RBNW1aDEMJ3lgevkQpU83Ejj2WqHkY.6ctAt.3nzco!/r" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="http://r.photo.store.qq.com/psc?/V10dFOfT42PhLi/OErzpq5D9LJxW5knQIpOPuh21g6n6ngkZIJUSna4GZs8p6r7TYaMhhcqwsePlzGnCfMAy0.FbDV9tNpf*kyI4YjiS04.kWMNU6eqiY6STZ4!/r" alt="">
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3" slot="pagination"></div>
    </swiper>
    <!--end of swiper-->
    <div class="nav-icons bg-white mt-3 d-flex flex-wrap pt-3">
      <div class="nav-item mb-3">
        <img src="http://r.photo.store.qq.com/psc?/V10dFOfT2Jfiu7/OErzpq5D9LJxW5knQIpOPgviCRcEYM2S5xRwVy406JLg9mDKM7N*68lMhaSoyIgPejHYemXW80qaP*QZMv8VFGcTtrHh0ugRTU8Hr5RxmeI!/r" alt="">
        <div>学生兼职区</div>
      </div>
      <div class="nav-item mb-3">
        <img src="http://r.photo.store.qq.com/psc?/V10dFOfT2Jfiu7/OErzpq5D9LJxW5knQIpOPifi*p2MVPIAuyEgvIQ*e6vu6U8qtFkTCQAVyQplB.SpxhCsElJqPlhc*hDqTfPywyZYi9a55YBjAOv6ZPBOm3c!/r" alt="">
        <div>私家小厨</div>
      </div>
      <div class="nav-item mb-3">
        <img src="http://r.photo.store.qq.com/psc?/V10dFOfT2Jfiu7/OErzpq5D9LJxW5knQIpOPv44avgp*3StYABLzWjKkSCFP6H1TQW5neXxHstXm0L3CLkRiIt5V4vv9PcIN.tcEnT7nOEE0bJTyYPsjKPVih4!/r" alt="">
        <div>学生赛事区</div>
      </div>
      <div class="nav-item mb-3">
        <img src="http://r.photo.store.qq.com/psc?/V10dFOfT2Jfiu7/OErzpq5D9LJxW5knQIpOPpwwhbjjabMhsYj5Kt1BzY251Nk6tUxihMzsc33rssrt40iSM6zWesQJWwEVRXh*4EhamwcA8jDQf1deW6qtPMk!/r" alt="">
        <div>学习交流区</div>
      </div>
      <div class="nav-item mb-3">
        <img src="http://r.photo.store.qq.com/psc?/V10dFOfT2Jfiu7/OErzpq5D9LJxW5knQIpOPt*2ymw5QBxP0VJn79aA5tQcyJPrrN33tGYMzOwgKMtVkI8HvuWb*yNmHhv27inhDpeHxisUUMViwbR*VWsbhqQ!/r" alt="">
        <div>新产品体验区</div>
      </div>
      <div class="nav-item mb-3">
        <img src="http://r.photo.store.qq.com/psc?/V10dFOfT2Jfiu7/OErzpq5D9LJxW5knQIpOPigcL8XbVnbfjBboSlCNUNpH3FX*RydT9eqdSo0V26B00CiUKsyVo5gzHJfmPV2MWkawL3oy2XzmTGJev9RJDQE!/r" alt="">
        <div>二手交易市场</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        autoplay:{
            delay: 1500
          },
        swiperOptions: {
          pagination: {
            el: '.pagination-home'
          }
        }
      }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/variables';

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    background: map-get($colors, 'white');
    &.swiper-pagination-bullet-active {
      background: map-get($colors, 'info');
    }
  }
}
.nav-icons {
  .nav-item {
    width: 33%;
    img {
      width: 60px;
      height: 60px;
    }
  }
}
</style>