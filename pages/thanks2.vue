<template>
  <div class="container" dir="rtl">
    <div class="row d-flex justify-content-center m-2">
      <button
        class="text-center text-color fs-1 mt-5 btn btn-light shadow-lg p-3 mb-5 bg-body rounded"
      >
        <a href="https://api.flagedu.com/lp/connect">
          فلاجيدو طريقك للحريه الماليه
        </a>
      </button>
      <h1 class="text-center" pb-4>
        <strong class="text-danger">بالفيديو :</strong> اربع خطوات لتصبح متداول
        اسهم
      </h1>

      <div class="row d-flex justify-content-center p-0 m-0 ph-you">
        <iframe
          class="col-lg-9 col-md-11 col-sm-11 m-xs-2 rounded shadow p-0 m-0"
          width="400"
          height="500"
          src="https://www.youtube.com/embed/siuUR2nSA_Q"
          title="تداول الأسهم 4 خطوات لتصبح متداول أسهم ناجح"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div class="col-12 text-light text-right p-3 mt-5">
        <p class="text-center text-color fs-3 mt-5">
          فلاجيدو معك طول الطريق لا تتردد في الانضمام
        </p>
      </div>

      <div class="col-12 text-center mb-4">
        <a
          class="btn btn-info col-lg-3 col-md-5 col-sm-5 col-xs-12 m-2 nowrop"
          href="https://wa.me/201099101772"
        >
          <i class="bi bi-whatsapp"></i> دعم مباشر في واتساب</a
        >
        <a
          class="btn btn-info col-lg-3 col-md-5 col-sm-5 col-xs-12 m-2 nowrop"
          href="https://t.me/+YwmM6nEYqMQ1OWM8"
          ><i class="bi bi-telegram"></i> مجتمعنا في التلجرام
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({
  name: "ThankYou2",
  components: {},
  layout: "page-layout",
})
export default class ThankYou2 extends Vue {
  // mounted() {
  //   var that = this;
  //   setTimeout(function () {
  //     var redirect_uri = that.$route.query.redirect_uri;
  //     location.href = redirect_uri;
  //   }, 31000);
  // }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Tajawal:wght@500;700;800;900&display=swap");

* {
  font-family: "Tajawal", sans-serif;
}

.btn-info {
  background-color: #1c8b89;
  border: none;
  color: #f9f9f9;
}

.text-color {
  color: #1c8b89;
}
.btn-info:hover {
  background-color: #12b1ae;
  border: none;
  color: #f9f9f9;
}

.logo-img {
  width: 200px;
}
body {
  background-color: #4ac0bd;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%234AC0BD' cx='50' cy='0' r='50'/%3E%3Cg fill='%2357c3c0' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%2362c6c3' cx='50' cy='100' r='50'/%3E%3Cg fill='%236dcac7' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%2377cdca' cx='50' cy='200' r='50'/%3E%3Cg fill='%2381d0cd' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%238ad3d0' cx='50' cy='300' r='50'/%3E%3Cg fill='%2393d6d4' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%239cdad7' cx='50' cy='400' r='50'/%3E%3Cg fill='%23a5ddda' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ade0de' cx='50' cy='500' r='50'/%3E%3Cg fill='%23b6e3e1' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%23bee6e4' cx='50' cy='600' r='50'/%3E%3Cg fill='%23c7e9e7' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%23cfeceb' cx='50' cy='700' r='50'/%3E%3Cg fill='%23d7f0ee' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23dff3f1' cx='50' cy='800' r='50'/%3E%3Cg fill='%23e7f6f5' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%23eff9f8' cx='50' cy='900' r='50'/%3E%3Cg fill='%23f7fcfc' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23FFFFFF' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: contain;
}
</style>
