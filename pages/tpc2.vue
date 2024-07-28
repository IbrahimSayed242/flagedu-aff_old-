<template>
  <div class="thank-you-wrapper vh-100 bg-x">
    <div class="container d-flex justify-content-center">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-11 mar">
          <div class="bg-g text-center rounded shadow mt-5">
            <img
              class="m-auto d-flex img-th"
              src="https://s6.imgcdn.dev/R0oT2.webp"
              style="z-index: 22; position: absolute"
            />
            <i class="bi bi-check2-circle text-light ee"></i>
            <img
              class="m-auto d-flex"
              src="https://s6.imgcdn.dev/99vtn.webp"
              width="100"
            />
            <div class="col-12 m-3 d-flex justify-content-end">
              <h2 class="m-5 text-light text-right col-7 tt">
                شكرا لك سيتم التواصل معك عبر البريد الالكتروني
              </h2>
              <h5 class="m-4 text-light text-right col-7 tx">
                شكرا لك سيتم التواصل معك عبر البريد الالكتروني
              </h5>
            </div>

            <a href="#" class="btn btn-light arrow-icon m-4 animate__jello">
              تصفح الكورس</a
            >
          </div>

          <div class="text-center m-2">
            <p>Flagedu &copy; 2023 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Action } from "nuxt-property-decorator";

@Component({
  name: "tpc",
  components: {},
  layout: "page-layout",
})
export default class tpc extends Vue {}
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");

* {
  font-family: "Tajawal", sans-serif;
}

.thank-you-page-content {
  vertical-align: middle;

  height: 100%;
}

.ee {
  font-size: 53px;
}

@media (max-width: 576px) {
  .tt {
    display: none;
  }
  .img-th {
    width: 50%;
    object-fit: contain;
    bottom: -15%;
  }
}

@media (min-width: 576px) {
  .tx {
    display: none;
  }
}

.bg-g {
  /* From https://css.glass */
  background: rgba(82, 163, 147, 0.28);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.7px);
  -webkit-backdrop-filter: blur(2.7px);
  border: 1px solid rgba(82, 163, 147, 0.92);
}

.bg-x {
  background-color: #024555;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%23024555' cx='50' cy='0' r='50'/%3E%3Cg fill='%23004d5e' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23005567' cx='50' cy='100' r='50'/%3E%3Cg fill='%23005e6f' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23006778' cx='50' cy='200' r='50'/%3E%3Cg fill='%23006f81' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%23007889' cx='50' cy='300' r='50'/%3E%3Cg fill='%23008192' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%23008a9a' cx='50' cy='400' r='50'/%3E%3Cg fill='%230094a2' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%23009daa' cx='50' cy='500' r='50'/%3E%3Cg fill='%2300a6b2' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%2300b0ba' cx='50' cy='600' r='50'/%3E%3Cg fill='%2300bac1' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%2300c3c8' cx='50' cy='700' r='50'/%3E%3Cg fill='%2300cdd0' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%2300d7d6' cx='50' cy='800' r='50'/%3E%3Cg fill='%2300e1dd' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%2306ebe4' cx='50' cy='900' r='50'/%3E%3Cg fill='%231af5ea' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%2328FFF0' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: contain;
}

.mar {
  margin-top: 20%;
}
</style>
