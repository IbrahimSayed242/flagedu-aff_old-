<template>
  <div class="container" dir="rtl">
    <div class="thank-you-container">
      <div class="thank-you-wrap p-3 m-4">
        <div class="ty-content text-center fs-3">
          <p>شكرًا لاختيارك Eve Trade !</p>
          <a class="back" @click="goBack">
            <span>عودة</span>
            <i style="font-size: 24px" class="mx-2"> >> </i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({
  name: "ThankEve",
  components: {},
  layout: "page-layout",
})
export default class ThankEve extends Vue {
  goBack() {
    // Navigate back to the previous page in the history stack
    this.$router.go(-1);
  }
  head() {
    return {
      title: "شكرا لتسجيلك في Eve Trade",
    };
  }
}
</script>

<style>
* {
  font-family: "Tajawal", sans-serif;
}

.thank-you-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(https://res.cloudinary.com/dt9k74vof/image/upload/v1706191787/banner-bg_qyfv1a.jpg);
  background-size: cover;
}
.thank-you-wrap {
  max-width: 510px;
  background: #fff;
  border-radius: 30px;
  width: 100%;
}

.back {
  background: #5ce1e6;
  padding: 13px 26px;
  display: inline-flex;
  color: #fff;
  text-decoration: none;
  border-radius: 50px;
  &:hover {
    color: #000;
  }
}
</style>
