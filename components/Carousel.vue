<template>
  <div id="swiperAT" style="background-color: blue">
    <!-- <h2 class="swiper-container__title">{{ sliderHeading }}</h2>
    <swiper :options="swiperOption" ref="swiper" class="swiper">

      <swiper-slide v-for="item in mediaItems" :key="item.id">
        <item :mediaItem="item"></item>
      </swiper-slide>

      <template v-slot:button-prev>
        <div
          @click="$refs.swiper.swiperInstance.slidePrev()"
          class="swiper-button-prev"
        ></div>
      </template>
      <template v-slot:button-next>
        <div
          @click="$refs.swiper.swiperInstance.slideNext()"
          class="swiper-button-next"
        ></div>
      </template>
    </swiper>
    <hr class="carousel-container__separator" /> -->
  </div>
</template>

<script>
// import Item from "./Item.vue";
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/swiper-bundle.min.css";

// export default {
//   name: "swiper-example-pagination-progress",
//   title: "Progress pagination",

//   components: {
//     Item,
//     Swiper,
//     SwiperSlide,
//   },
//   data() {
//     return {
//       swiperOption: {
//         effect: "coverflow",
//         grabCursor: true,
//         centeredSlides: true,
//         coverflowEffect: {
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         },
//         slidesPerView: 10,
//         spaceBetween: 30,
//         loop: true,
//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         },
//       },
//     };
//   },
//   props: {
//     mediaItems: {
//       type: Array,
//       default: () => [],
//     },
//     sliderHeading: String,
//   },
// };
</script>
<style scoped>
.swiper-container__title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.swiper {
  padding: 0 1rem;
}
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  width: 30px;
  height: 30px;
  margin-top: -15px;
  z-index: 10;
  cursor: pointer;
  background-size: 30px 30px;
  background-position: center;
  background-repeat: no-repeat;
}
.swiper-button-prev {
  left: 0;
  background-image: url("/images/arrow-left.svg");
}
.swiper-button-next {
  right: 0;
  background-image: url("/images/arrow-right.svg");
}
.swiper-container__separator {
  margin: 2rem 0;
  border: 0;
  border-top: 1px solid #eaeaea;
}
#SwiperAT {
  margin: 0 auto;
  max-width: 1200px;
  background-color: blue;
}
</style>
```
